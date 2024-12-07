import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const captain = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlenght: [3, 'First name must be at least 3 characters long']
        },
        lastname: {
            type: String,
            required: true,
            
        }
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },

    password: {
        type: String,
        required: true,
        minlenght: [6, 'Password must be at least 6 characters long']
    },

    socketId: {
        type: String,
    },

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },

    vechicle: {
        color: {
            type: String,
            required: true,
            minlenght: [3, 'Color must be at least 3 characters long']
        },
        plate: {
            type: String,
            required: true,
            minlenght: [3, 'Plate must be at least 3 characters long']
        },
        // platePhoto: {
        //     type: String,
        //     required: true
        // },
        // ownerPhoto: {
        //     type: String,
        //     required: true
        // },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1']
        },
        vechicleType: {
            type: String,
            required: true,
            enum: ['car', 'moto','auto']
        }
    },
    location: {
        lat: {
            type: Number,
            required: false
        },
        lng: {
            type: Number,
            required: false
        }
    }
});

captain.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
}

captain.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

captain.statics.hashPassword = async function (password) {
    return bcrypt.hash(password, 8);
}

const Captain = mongoose.model('Captain', captain);

export default Captain;