const express = require('express')
const router = express.Router()
const dashboardRoutes = require('./dashboardRoutes')
const productRoutes = require('./productRoutes')

router.use('/', dashboardRoutes)
router.use('/', productRoutes)

module.exports = router