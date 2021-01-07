import  {orderSchema}  from "./order.model"
const mongoose = require('mongoose')
const Schema = mongoose.Schema

export const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        default: ''
    },
    contact:{
        email: {
            type: String,
            required:true
        },
        address: {
            street: {
                type: String,
                required: true
            },
            town: {
                type: String,
                required: true
            },
            postcode: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            }
        }
    }
,
    isLoggedIn: {
        type: Boolean,
        required: true
    },
    created: {
        type: Date,
        default: Date(),
    },

    orders: 
        {
            type: Array,
            default: []
        }
    
})

module.exports = mongoose.model('users', userSchema)