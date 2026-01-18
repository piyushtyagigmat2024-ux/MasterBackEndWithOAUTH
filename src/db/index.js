import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const connectDB  = async ()=> {
    try{
        console.log(process.env.MongoURL);
        await mongoose.connect(process.env.MongoURL)
        console.log("MongoDB connected")
    }
    catch(error){
        console.log("MongoDb connection Failed", error)
        process.exit(1);
    }
}

export default connectDB;