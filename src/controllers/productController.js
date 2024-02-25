const Product = require('../models/Product')
const { baseHtml, generateNavBar } = require('../utils/helpers')

const ProductController = {
    async getAllProducts(req, res) {
        res.send(baseHtml)
    }
}

module.exports = ProductController