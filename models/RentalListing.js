// const mongoose = require('mongoose');
import mongoose from 'mongoose'
const {Schema} = mongoose


const RentalListing = new Schema({
    location:{
        type: String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    is_rented_by:{
        type:Schema.Types.ObjectId,
        ref: 'UserInfo',
        required:false
    },

    from_date:{
        type:Number,
        required:false
    },

    from_month:{
        type:Number,
        required:false
    },

    from_year:{
        type:Number,
        required:false
    },

    to_date:{
        type:Number,
        required:false
    },
    to_month:{
        type:Number,
        required:false
    },
    to_year:{
        type:Number,
        required:false
    },
    day_difference:{
        type:Number,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },

    
})

// module.exports = mongoose.model('RentalListing',RentalListing);

export default mongoose.model('RentalListing',RentalListing)