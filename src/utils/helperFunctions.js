const { htmlArray, index, editProductForm } = require("./htmlTemplates");
const Product = require('../models/Product')
const generateIndex = (req, res) => {
    const [head, opMain, cloMainHtml] = htmlArray
    const indexHtml = [head, opMain, index, cloMainHtml].join('')
    res.status(200).send(indexHtml)
}

function generateHtml(content, dashboardView) {
    const [head, opMain, cloMainHtml] = htmlArray
    const viewType = dashboardView === true ? 'dashboard' : 'products'
    const nav = `
    <nav class="nav" id="nav">
        <form class="navForm" action="/shop/category" method="post">
            <button type="submit" name="categoryBtn" value="Productos">Productos</button>
            <button type="submit" name="categoryBtn" value="Camisetas">Camisetas</button>
            <button type="submit" name="categoryBtn" value="Pantalones">Pantalones</button>
            <button type="submit" name="categoryBtn" value="Accesorios">Accesorios</button>
        </form>
    </nav>`
    let userAction = `
    <div class="actions">
        <a href="">Login</a>
    </div>`
    dashboardView === true
        ? userAction = `
        <div class="actions">
            <a href="">Login</a>
            <a href="/shop/dashboard/new" class="addBtn">Crear producto</a>
        </div>`
        : userAction

    return [head, nav, userAction, opMain, content, cloMainHtml].join('')
}



const selectedCategory = (storedCategory) => {
    const categoryOp = [
        '<option value="Camisetas" name="tshirts">Camisetas</option>',
        '<option value="Pantalones" name="pants">Pantalones</option>',
        '<option value="Zapatos" name="shoes">Zapatos</option>',
        '<option value="Accesorios" name="accessories">Accesorios</option>`',
    ];
    const array = [];
    for (const option of categoryOp) {
        const match = option.match(/value="([^"]+)"/);
        match && match[1] === storedCategory
            ? array.push(`<option value="${match[1]}" name="${match[1]}" selected>${match[1]}</option>`)
            : array.push(option)
    }
    return array.join('');
};

const selectedSize = (storedSize) => {
    const sizeOp = [
        '<option value="XS" name="XS">XS</option>',
        '<option value="S" name="S">S</option>',
        '<option value="M" name="M">M</option>',
        '<option value="L" name="L">L</option>',
        '<option value="XL" name="XL">XL</option>',
        '<option value="Unitalla" name="Uni">Unitalla</option>',
    ];
    const array = [];
    for (const option of sizeOp) {
        const match = option.match(/value="([^"]+)"/);
        match && match[1] === storedSize
            ? array.push(`<option value="${match[1]}" name="${match[1]}" selected>${match[1]}</option>`)
            : array.push(option)
    }
    return array.join('');
};

async function populateEditForm(productId) {
    try {
        const storedProduct = await Product.findById(productId)
        return `
        <h1>Editar producto</h1>
            <form class="form" id="editForm" action="/shop/dashboard/${productId}?_method=PUT" method="post">
                <label for="nameId">Nombre:</label>
                <input id="nameId" name="name" type="text" placeholder="${storedProduct.name}">

                <label for="descriptionId">Descripción:</label>
                <textarea id="descriptionId" name="description" placeholder="${storedProduct.description}"></textarea>

                <label for="priceId">Precio:</label>
                <input id="priceId" name="price" type="number" placeholder="${storedProduct.price}">

                <label for="imgId">Imagen:</label>
                <input id="imgId" name="img" type="file" >

                <label for="categoryId">Categoría:</label>
                <select id="categoryId" name="category">
                    ${selectedCategory(storedProduct.category)}
                </select>

                <label for="sizeId">Talla:</label>
                <select id="sizeId" name="size">
                    ${selectedSize(storedProduct.size)}
                </select>
                <div class="actions">
                    <button class="formBtn" type="submit">Guardar</button>
                    <button class="formBtn" type="reset">Borrar</button>
                    <a class="formBtn" href="/shop/dashboard/${productId}">Cancelar</a>
                </div>
            </form>`
    } catch (error) {
        console.log(error);
        throw new Error('Error: Could not populate form', error)
    }
}

function printAllProducts(products, dashboardView) {
    const viewType = dashboardView === true ? 'dashboard' : 'products'
    let html = '';
    for (let product of products) {
        const detailBtn = `<a href="/shop/${viewType}/${product._id}" class="btn">Ver detalle</a>`
        html += `
        <div class="product-card">
            <img src="${product.img || ''}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description || ''}</p>
            <h4>${product.price}€</h4>
            <div class="detail-container">
                ${detailBtn}
            </div>
        </div>`
    }
    return html;
}

function printSingleProduct(product, productId, dashboardView) {
    const viewType = dashboardView === true ? 'dashboard' : 'products'
    const returnBtn = `<a href="/shop/${viewType}/" class="btn">Volver</a>` || ''
    const editBtn = dashboardView === true
        ? `<a href="/shop/dashboard/${productId}/edit" class="btn">Editar</a>` : ''
    const deleteBtn = dashboardView === true
        ? `
        <form class="deleteForm" action="/shop/dashboard/${productId}/delete?_method=DELETE" method="POST">
            <button class="deleteBtn" type="submit">Borrar</button>
        </form>`
        : ''

    return `
        <div class="product-card">
            <img src="${product.img || ''}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description || ''}</p>
            <h4>${product.price}€</h4>
            <p>Categoría: ${product.category}</p>
            <p>Talla: ${product.size}</p>
            <div class="detail-container">
                ${returnBtn}
                ${editBtn}
                ${deleteBtn}
            </div>
        </div>`
}


const btnRedirect = (router) => {
    const dashboardView = req.originalUrl.includes('dashboard')
    const viewType = dashboardView === true ? 'dashboard' : 'products'

    router.post(`/${viewType}/category`, (req, res) => {
        const dashboardView = req.originalUrl.includes('dashboard')
        const viewType = dashboardView === true ? 'dashboard' : 'products'
        res.locals.category = req.body
        return res.redirect(`/${viewType}/?category=encodeURIComponent(res.locals.category)`)
    })

    router.get(`/${viewType}`, (req, res) => {
        console.log(req.query)
    })
}

async function filterCategory(req, res) {
    const dashboardView = req.originalUrl.includes('dashboard')
    const viewType = dashboardView === true ? 'dashboard' : 'products'
    // `action="/shop/${viewType}/${req.query.category}"`
    try {

    }
    catch (error) { }
}

module.exports = { generateHtml, generateIndex, populateEditForm, printAllProducts, printSingleProduct }