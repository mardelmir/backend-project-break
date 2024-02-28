const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/productController')

// Ok, pero revisar:
router.get('/dashboard', ProductController.getProducts)
router.get('/dashboard/new', ProductController.getNewProductForm)
router.post('/dashboard', ProductController.createProduct)
router.get('/dashboard/:productId', ProductController.getProductById)
router.get('/dashboard/:productId/edit', ProductController.getEditProductForm)

// Ok postman, sí navegador pero con fullería:
router.put('/dashboard/:productId', ProductController.updateProduct)
router.post('/dashboard/:productId', ProductController.updateProduct)
router.delete('/dashboard/:productId/delete', ProductController.deleteProduct)
router.get('/dashboard/:productId/delete', ProductController.deleteProduct)

module.exports = router