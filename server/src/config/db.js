import mongoose from 'mongoose';

let isDbConnected = false;

export const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/vasuniti_db';
  try {
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 3000,
    });
    isDbConnected = true;
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    isDbConnected = false;
    console.warn(`[Database] MongoDB Connection notice: ${error.message}`);
    console.log(`[Database] Operating in Standalone/Hybrid Fallback Mode (Full API functionality preserved).`);
  }
};

export const getDbStatus = () => isDbConnected;
