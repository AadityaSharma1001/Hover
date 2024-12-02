import mongoose from "mongoose";
import bcypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long']
        },

        lastname:{
            type: String,
            required: true,
            minlength: [3, 'Last name must be at least 3 characters long']
        }
    },

    email:{
        type: String,
        required: true,
        unique: true,
    },

    password:{
        type: String,
        required: true,
        select: false,
    },

    socketId:{
        type: String,
        required: false,
    },
})

userSchema.methods.generateAuthToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE});
}

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcypt.compare(enteredPassword, this.password);
}

userSchema.statics.hashPassword = async function(plainPassword){
    return await bcypt.hash(plainPassword, 10);
}

const User = mongoose.model('User', userSchema);

export default User;