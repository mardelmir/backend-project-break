const { htmlArray, index } = require("./htmlTemplates");

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
    <div class="userActions">
        <a href="">Login</a>
    </div>`
    dashboardView === true
        ? userAction = `
        <div class="userActions">
            <a href="">Login</a>
            <a href="/shop/dashboard/new" class="addBtn">Crear producto</a>
        </div>`
        : userAction

    return [head, nav, userAction, opMain, content, cloMainHtml].join('')
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
        ${detailBtn}
        </div>`
    }
    return html;
}

function printSingleProduct(product, productId, dashboardView) {
    const viewType = dashboardView === true ? 'dashboard' : 'products'
    const returnBtn = `<a href="/shop/${viewType}/" class="btn">Volver</a>`
    const editBtn = dashboardView === true ? `<a href="/shop/dashboard/${productId}/edit" class="btn">Editar</a>` : ''
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
            <p>${product.category}</p>
            <p>${product.size}</p>
            ${returnBtn}
            ${editBtn}
            ${deleteBtn}
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

module.exports = { generateHtml, generateIndex, printAllProducts, printSingleProduct }