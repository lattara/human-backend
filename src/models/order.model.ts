import {ObjectID} from 'mongodb';
import { productSchema } from './product.model';
const mongoose = require('mongoose')
const Schema = mongoose.Schema


export const orderSchema = new Schema({
    orderName: {
        type: String,
        default: ''
    },
    userReference: {
        type: ObjectID,
        required: true
    },
    products: [
        {
        type: Schema.Types.ObjectId, ref: 'products',
        required: true
        }
    ],
    notes: {
        // put radio button on size // man wrist womans wrist 
        type: String,
        required: false
    },
    totalAmount: {
        type: Number,
        required: true
    },
    payed: {
        type: Boolean,
        default: false,
    },
    orderedOn: {
        type: String,
        default: Date
    }
})

module.exports = mongoose.model('Orders', orderSchema)
