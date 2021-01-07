const mongoose = require('mongoose')
const Schema = mongoose.Schema

export const productSchema = new Schema({
    name: {
        type: String,
        
    },
    category: {
        type: String, enum: ["necklace", "bracelet"]
    },
    description: {
        type: String,
        
    },
    price: {
        type: Number,
        
    },
    imgLink: {
        type: String,
        
    },
    isSold: {
        type: Boolean,
        default: false,
    },
    tags: {
        type: Array,
        
    } 

})

module.exports = mongoose.model('Product', productSchema)
