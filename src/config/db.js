import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const connectDB = async () => {
    try {
        const uri = "mongodb+srv://shebkhan:shebkhan@cluster0.p2dyh.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0";
        if (!uri) {
            throw new Error('MONGODB_URI is not defined in the environment variables');
        }
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;