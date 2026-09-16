import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDB, getDbStatus } from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// Connect to Database (auto-fallback if disconnected)
connectDB();

// Middleware
app.use(cors({
  origin: [CLIENT_URL, 'http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/contact', contactRoutes);

// System Health & Diagnostics
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    service: 'VasuNiti Core API Engine',
    version: '1.0.0',
    database: getDbStatus() ? 'connected' : 'standalone-fallback',
    timestamp: new Date().toISOString(),
  });
});

// Root check
app.get('/', (req, res) => {
  res.send('VasuNiti API Service is running.');
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `API Route not found: ${req.method} ${req.originalUrl}`,
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Unhandled Server Error]:', err);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`🚀 VasuNiti Server Running on Port: ${PORT}`);
  console.log(`📡 Client Proxy Target: ${CLIENT_URL}`);
  console.log(`🛰️  API Health: http://localhost:${PORT}/api/health`);
  console.log(`=========================================`);
});
