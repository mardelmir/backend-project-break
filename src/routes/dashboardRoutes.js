const express = require('express')
const router = express.Router()
const { createProduct, getProducts, getProductById, getNewProductForm, getEditProductForm, updateProduct, deleteProduct } = require('../controllers/productController')

router.get('/dashboard', getProducts)
//router.get('/dashboard/:productId', getProductById)
router.get('/dashboard/new', getNewProductForm)
router.post('/dashboard', createProduct)
router.get('/dashboard/:productId/edit', getEditProductForm)
//router.put('/dashboard/:productId', updateProduct)
//router.put('/dashboard/:productId/delete', deleteProduct)

module.exports = router