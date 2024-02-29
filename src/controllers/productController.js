const Product = require('../models/Product')
const { generateHtml, printAllProducts, printSingleProduct } = require('../utils/helperFunctions')
const { newProductForm, editProductForm } = require('../utils/htmlTemplates')

const ProductController = {
    getNewProductForm(req, res) {
        const dashboardView = req.originalUrl.includes('dashboard')
        const apiView = req.originalUrl.includes('api')
        try {
            const html = generateHtml(newProductForm, dashboardView)
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
            const productsHtml = printAllProducts(products, dashboardView)
            const html = generateHtml(productsHtml, dashboardView)
            apiView === false
                ? res.status(200).send(html)
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
            const productHtml = printSingleProduct(product, productId, dashboardView)
            const html = generateHtml(productHtml, dashboardView)
            apiView === false
                ? res.status(200).send(html)
                : res.status(200).send({ message: 'Product successfully retrieved', product })
        }
        catch (error) {
            console.log(error);
            apiView === false
                ? res.status(500).send('Error: Could not get specified product')
                : res.status(500).send({ message: 'Error: Could not get specified product' })
        }
    },

    getEditProductForm(req, res) {
        const dashboardView = req.originalUrl.includes('dashboard')
        const apiView = req.originalUrl.includes('api')
        try {
            const html = generateHtml(editProductForm, dashboardView)
                .replace(/action="[^"]*"/, `action="/shop/dashboard/${req.params.productId}"`)
                .replace(/<a class="formBtn" href="[^"]*">/, `<a class="formBtn" href="/shop/dashboard/${req.params.productId}">`)
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
            const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true })
            apiView === false
                ? res.status(200).redirect(`/shop/dashboard/${req.params.productId}`)
                : res.status(200).send({ message: 'Product successfully updated', html: updatedProduct })
        }
        catch (error) {
            console.log(error);
            apiView === false
                ? res.status(500).send('Error: Could not update product')
                : res.status(500).send({ message: 'Error: Could not update product' })
        }
    },

    async deleteProduct(req, res) {
        const apiView = req.originalUrl.includes('api')
        try {
            const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
            apiView === false
                ? res.status(200).redirect('/shop/dashboard')
                : res.status(200).send({ message: 'Product successfully deleted', deletedProduct })
        }
        catch (error) {
            console.log(error);
            apiView === false
                ? res.status(500).send('Error: Could not delete product')
                : res.status(500).send({ message: 'Error: Could not delete product' })
        }
    }
}

module.exports = ProductController