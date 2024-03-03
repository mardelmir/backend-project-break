const express = require('express')
const router = express.Router()
const authRoutes = require('./authRoutes')
const productRoutes = require('./productRoutes')
const dashboardRoutes = require('./dashboardRoutes')

router.use('/', authRoutes)
router.use('/', productRoutes)
router.use('/', dashboardRoutes) //authMiddleware


module.exports = router