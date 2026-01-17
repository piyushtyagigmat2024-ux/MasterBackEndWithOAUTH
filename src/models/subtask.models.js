import mongoose, { Schema } from "mongoose";


const SubTaskSchema = new Schema({
    title:{
        type:String,
        required:true, 
        trime: true
    },
    task:{
        type:Schema.Types.ObjectId,
        ref: "Task",
        required:true
    },
    isCompleted: {
        type:Boolean,
        default:false
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }



},{timestamps:true});




export const SubTask = mongoose.model("SubTask", SubTaskSchema);