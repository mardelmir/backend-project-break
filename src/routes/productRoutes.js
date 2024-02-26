const express = require('express')
const router = express.Router()
const { getProducts, getProductById } = require('../controllers/productController')

router.get('/products', getProducts)
router.get('/products/:productId', getProductById)

module.exports = router