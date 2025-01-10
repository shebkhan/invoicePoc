import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import invoiceRoutes from './routes/invoiceRoutes.js';
import connectDB from './config/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 6000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/invoices', invoiceRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});