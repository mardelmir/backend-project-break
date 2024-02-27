const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/productController')

router.get('/dashboard', ProductController.getProducts)
//router.get('/dashboard/:productId', getProductById)
router.get('/dashboard/new', ProductController.getNewProductForm)
router.post('/dashboard', ProductController.createProduct)
router.get('/dashboard/:productId/edit', ProductController.getEditProductForm)
//router.put('/dashboard/:productId', updateProduct)
//router.put('/dashboard/:productId/delete', deleteProduct)

module.exports = router