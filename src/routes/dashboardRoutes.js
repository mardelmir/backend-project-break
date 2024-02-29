const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/productController')

router.get('/dashboard', ProductController.getProducts)
router.get('/dashboard/new', ProductController.getNewProductForm)
router.post('/dashboard', ProductController.createProduct)
router.get('/dashboard/:productId', ProductController.getProductById)
router.get('/dashboard/:productId/edit', ProductController.getEditProductForm)
router.put('/dashboard/:productId', ProductController.updateProduct)
router.post('/dashboard/:productId', ProductController.updateProduct)
router.delete('/dashboard/:productId/delete', ProductController.deleteProduct)
router.get('/dashboard/:productId/delete', ProductController.deleteProduct)

module.exports = router