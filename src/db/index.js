import mongoose, { connect } from "mongoose";

const connectDB  = async ()=> {
    try{
        await mongoose.connect(process.env.MONGOURL)
        console.log("MongoDB connected")
    }
    catch(error){
        console.log("MongoDb connection Failed", error)
        process.exit(1);
    }
}

export default connectDB;