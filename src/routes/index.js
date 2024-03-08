const express = require('express')
const router = express.Router()
const authRoutes = require('./authRoutes')
const productRoutes = require('./productRoutes')
const dashboardRoutes = require('./dashboardRoutes')
const checkAuthState = require('../middlewares/authMiddleware')

router.use('/', authRoutes)
router.use('/', productRoutes)
router.use('/', checkAuthState, dashboardRoutes) //authMiddleware


module.exports = router