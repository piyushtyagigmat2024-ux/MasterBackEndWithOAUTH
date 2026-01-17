import mongoose, { Schema } from "mongoose";
import jwt from 'jsonwebtoken';
const userSchema = new Schema({
    avatar:{
        type:{
            url:String, 
            localpath:String
        },
        default:{
            url:`https://placehold.co/600*400`,
            localpath:""
        }
    },
    username:{
        type:String, 
        required: true, 
        unique: true, 
        lowercase:true, 
        trim:true
    },
      email:{
        type:String, 
        required: true, 
        unique: true, 
        lowercase:true, 
        trim:true, 
    }, 
    fullname:{
        type:String, 
        required: true,
    },
    password:{
        type:String, 
        required: [true,"password is required"]
    },
    isEmailVerified:{
        type:Boolean, 
        default:false, 
    },
    forgotPasswordToken:{
        type:String, 
    },
    forgotPasswordExpiry:{
        type:Date  
    },
    refreshToken:{
        type:String
    },
    refreshToken:{
        type:String
    },
    emailVerificationToken:{
        type:String
    },
    emailVerificationExpiry:{
        type:Date,
    }
  }, 
  {timestamps:true},
);

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
        this.password = await bcrypt.hash(this.password, 10);
        next();
})

userSchema.methods.isPassword = async function(password){

    return bcrypt.compare(password, this.password);

}
userSchema.methods.genrateAccessToekn = function(){
    return jwt.sign(
        {
            _id:this._id, 
            email: this.email,
            username : this.username
        },
        process.env.ACCESSTOKENSEC,
        {expiresIn:process.env.ACCESSTOKENEXPIRY}
    )
}

userSchema.methods.genrateRefreshToekn = function(){
    return jwt.sign(
        { 
            _id:this._id
        },
        process.env.REFRESHTOKENSEC,
        {expiresIn:process.env.REFRESHTOKENEXPIRY}
    )
}
export const User = mongoose.model("User", userSchema);