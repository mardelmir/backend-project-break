const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/productController')
// const { generateToken, verifyToken } = require('../middlewares/authMiddleware')

router.get('/dashboard/new', ProductController.getNewProductForm)
router.post('/dashboard', ProductController.createProduct)
router.get('/dashboard', ProductController.getProducts)
router.post('/dashboard/category', ProductController.filterCategory)
router.get('/dashboard/:productId', ProductController.getProductById)
router.get('/dashboard/:productId/edit', ProductController.getEditProductForm)
router.put('/dashboard/:productId', ProductController.updateProduct)
router.delete('/dashboard/:productId/delete', ProductController.deleteProduct)

module.exports = router