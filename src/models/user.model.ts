import { O_DIRECTORY } from "constants"

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
    contact:[{
        email: {
            type: String,
            required:true
        },
        address: [ {
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
           
        ]
    }]
,
    isLoggedIn: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: Date(),
    },

    orders: [
        {
            type: Order,
            default: []
        }
    ]
})

module.exports = mongoose.model('userSchema', userSchema)