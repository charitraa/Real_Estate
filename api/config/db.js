import mongoose from 'mongoose';
// import env variables
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/real_estate");
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
