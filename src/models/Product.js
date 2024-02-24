const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    //image:
    category: String,
    //size:
    price: Number
}, { timestamps: true })

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product