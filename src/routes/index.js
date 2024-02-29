const express = require('express')
const router = express.Router()
const dashboardRoutes = require('./dashboardRoutes')
const productRoutes = require('./productRoutes')

const btnRedirect = (router) => { 
    const viewType = 'products' || 'dashboard'  
    router.post(`/${viewType}/category`, (req, res) => {
        const dashboardView = req.originalUrl.includes('dashboard')
        const viewType = dashboardView === true ? 'dashboard' : 'products'
        res.locals.category = req.body.categoryBtn
        console.log(`/${viewType}/?category=${encodeURIComponent(res.locals.category)}`)
        return res.redirect(`/${viewType}/?category=${encodeURIComponent(res.locals.category)}`)
    })

    router.get(`/${viewType}/`, (req, res) => {
        console.log(cat)
    })
}

router.use('/', dashboardRoutes)
router.use('/', productRoutes)

btnRedirect(router)

module.exports = router