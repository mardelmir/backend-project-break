const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/productController')

// Acabado:
router.get('/dashboard', ProductController.getProducts)
router.get('/dashboard/new', ProductController.getNewProductForm)
router.post('/dashboard', ProductController.createProduct)
router.get('/dashboard/:productId', ProductController.getProductById)

// Incompleto:
router.get('/dashboard/:productId/edit', ProductController.getEditProductForm)
//router.put('/dashboard/:productId', ProductController.updateProduct)

// Sin hacer:
//router.put('/dashboard/:productId/delete', ProductController.deleteProduct)

module.exports = router