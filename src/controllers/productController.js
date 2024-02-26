const Product = require('../models/Product')
const { replaceMain, replaceNavBar, generateNavBar, generateProductCards } = require('../utils/helperFunctions')
const { newProductForm, editProductForm } = require('../utils/htmlTemplates')

const ProductController = {
    async createProduct(req, res) {
        const apiView = req.originalUrl.includes('api')
        try {
            console.log(req.body.name)
            const product = await Product.create({ ...req.body });
            res.status(201).send({ message: 'Product successfully created', product });
            
            // const html = replaceMain(newProductForm)
            // const htmlApi = { html: html }
            // apiView === false ? res.status(200).send(html) : res.status(200).json(htmlApi)

        } catch (error) {
            console.log(error);
            apiView === false
                ? res.status(500).send('Error: Could not create product')
                : res.status(500).send({ message: 'Error: Could not create product' })
        }
    },

    async getProducts(req, res) {
        const products = await Product.find({})
        
        const apiView = req.originalUrl.includes('api')
        const productsHtml = generateProductCards(products)
        
        apiView === false ? res.status(200).send(replaceMain(productsHtml)) : res.status(200).json(products)
    },

    async getProductById(req, res) {
        // const adminView = req.originalUrl.includes('dashboard')

        // const apiView = req.originalUrl.includes('api')
        // const htmlTest = 'HTML test'
        // const apiTest = { test: 'api test' }
        // apiView === false ? res.status(200).send(replaceMain(htmlTest)) : res.status(200).json(apiTest)
    },

    getNewProductForm(req, res) {
        const apiView = req.originalUrl.includes('api')
        try {
            const html = replaceMain(newProductForm)
            const htmlApi = { html: html }
            apiView === false ? res.status(200).send(html) : res.status(200).json(htmlApi)

        } catch (error) {
            console.log(error);
            apiView === false
                ? res.status(500).send('Error: Could not get New Product Form')
                : res.status(500).send({ message: 'Error: Could not get New Product Form' })
        }
    },

    getEditProductForm(req, res) { 
        const apiView = req.originalUrl.includes('api')
        try {
            const html = replaceMain(editProductForm)
            const htmlApi = { html: html }
            apiView === false ? res.status(200).send(html) : res.status(200).json(htmlApi)

        } catch (error) {
            console.log(error);
            apiView === false
                ? res.status(500).send('Error: Could not get Edit Product Form')
                : res.status(500).send({ message: 'Error: Could not get Edit Product Form' })
        }
    },

    async updateProduct(req, res) { },

    async deleteProduct(req, res) { }
}


module.exports = ProductController