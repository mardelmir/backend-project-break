const Product = require('../models/Product')
const { replaceMain, replaceNavBar, generateNavBar, printProductCards, printSingleProduct } = require('../utils/helperFunctions')
const { newProductForm, editProductForm } = require('../utils/htmlTemplates')

const ProductController = {
    async createProduct(req, res) {
        const apiView = req.originalUrl.includes('api')
        try {
            const product = await Product.create({ ...req.body });

            apiView === false
                ? res.status(201).redirect('/shop/dashboard')
                : res.status(201).send({ message: 'Product successfully created', product })

        } catch (error) {
            console.log(error);
            apiView === false
                ? res.status(500).send('Error: Could not create product')
                : res.status(500).send({ message: 'Error: Could not create product' })
        }
    },

    async getProducts(req, res) {
        const dashboardView = req.originalUrl.includes('dashboard')
        const apiView = req.originalUrl.includes('api')

        try {
            const products = await Product.find({})
            const productsHtml = printProductCards(products, dashboardView)

            apiView === false
                ? res.status(200).send(replaceMain(productsHtml))
                : res.status(200).send({ message: 'Products successfully retrieved', products })
        }
        catch (error) {
            console.log(error);
            apiView === false
                ? res.status(500).send('Error: Could not get products')
                : res.status(500).send({ message: 'Error: Could not get products' })
        }
    },

    async getProductById(req, res) {
        const dashboardView = req.originalUrl.includes('dashboard')
        const apiView = req.originalUrl.includes('api')
        const productId = req.params.productId

        try {
            const product = await Product.findById(productId);
            const productHtml = printSingleProduct(product, dashboardView, productId)

            apiView === false
                ? res.status(200).send(replaceMain(productHtml))
                : res.status(200).send({ message: 'Prpduct successfully retrieved', product })
        }
        catch (error) {
            console.log(error);
            apiView === false
                ? res.status(500).send('Error: Could not get specified product')
                : res.status(500).send({ message: 'Error: Could not get specified product' })
        }
    },

    getNewProductForm(req, res) {
        const apiView = req.originalUrl.includes('api')
        try {
            const html = replaceMain(newProductForm)

            apiView === false
                ? res.status(200).send(html)
                : res.status(200).send({ message: 'New Product Form successfully retrieved', html: html })

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
            const productId = req.params.productId
            const html = replaceMain(editProductForm)

            apiView === false
                ? res.status(200).send(html)
                : res.status(200).send({ message: 'Edit Product Form successfully retrieved', html: html })

        } catch (error) {
            console.log(error);
            apiView === false
                ? res.status(500).send('Error: Could not get Edit Product Form')
                : res.status(500).send({ message: 'Error: Could not get Edit Product Form' })
        }
    },

    async updateProduct(req, res) {
        const apiView = req.originalUrl.includes('api')
        try {

        }
        catch (error) {
            console.log(error);
            apiView === false
                ? res.status(500).send('Error: Could not update product')
                : res.status(500).send({ message: 'Error: Could not update product' })
        }
    },

    async deleteProduct(req, res) { }
}


module.exports = ProductController