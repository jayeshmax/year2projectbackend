// const mongoose = require('mongoose');
import mongoose from "mongoose";
const {Schema} = mongoose 

const UserInfo = Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    favorite:[{
        type:String,
        required:false
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

// module.exports = mongoose.model('UserInfo',UserInfo);
export default mongoose.model('UserInfo',UserInfo)
