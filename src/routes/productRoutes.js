const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/productController')

router.get('/products', ProductController.getAllProducts)
router.get('/products/:productId')
router.get('/dashboard')
router.get('/dashboard/:productId')
router.get('/dashboard/new')
router.post('/dashboard')
router.get('/dashboard/:productId/edit')
router.put('/dashboard/:productId')
router.put('/dashboard/:productId/delete')

module.exports = router