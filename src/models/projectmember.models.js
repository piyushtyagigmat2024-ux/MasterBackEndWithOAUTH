import mongoose, { Schema } from "mongoose";
import { AvaiableUserRoles, UserRolesEnum } from "../utils/constants";


const projectMemberSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    project:{
        type:Schema.Types.ObjectId, 
        ref: "Project",
        required: true
    }, 
    role:{
        type:String, 
        enum: AvaiableUserRoles,
        default:UserRolesEnum.MEMBER
    }
},
    {timestamps:true}
);




export const ProjectMember = mongoose.model("ProjectMember", projectMemberSchema);