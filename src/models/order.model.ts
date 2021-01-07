import {ObjectID} from 'mongodb';
import { productSchema } from './product.model';
const mongoose = require('mongoose')
const Schema = mongoose.Schema


export const orderSchema = new Schema({
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
})

module.exports = mongoose.model('Orders', orderSchema)
