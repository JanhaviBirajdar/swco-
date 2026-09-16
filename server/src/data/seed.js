import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectDB } from '../config/db.js';
import { Product } from '../models/Product.js';
import { defaultProducts } from './seedData.js';

dotenv.config();

const seedDatabase = async () => {
  try {
    console.log('[Seed] Connecting to MongoDB...');
    await connectDB();

    if (mongoose.connection.readyState === 1) {
      console.log('[Seed] Clearing existing products...');
      await Product.deleteMany({});
      
      console.log('[Seed] Inserting fresh product catalog...');
      const inserted = await Product.insertMany(defaultProducts);
      console.log(`[Seed] Successfully seeded ${inserted.length} products!`);
    } else {
      console.log('[Seed] MongoDB not connected; defaultProducts data will be served in fallback mode.');
    }
  } catch (error) {
    console.error('[Seed Error]:', error);
  } finally {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close();
      console.log('[Seed] MongoDB connection closed.');
    }
    process.exit(0);
  }
};

seedDatabase();
