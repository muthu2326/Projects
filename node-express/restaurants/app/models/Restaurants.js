const mongoose = require('mongoose')
const { Schema } = mongoose.Schema

const restaurantSchema = new Schema({
    name: {
        type: String
    },
    address:{
        area:{
            type: String
        },
        city:{
            type: String,
            default: 'Bangalore'
        },
        pincode:{
            type: Number,
            minlength: 6,
            maxlength: 6
        }
    },
    cusine:{
        type: [ String ]
    },
    phone:{ 
        type: Number,
        minlength: 10,
        maxlength: 10
    },
    rating:{
        type: Number,
    },
    reviews:{
        
    }
})

const Restaurant = mongoose.model('Restaurant',restaurantSchema)

module.exports = {
    Restaurant
}
