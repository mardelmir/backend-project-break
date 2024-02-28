const { htmlArray, index } = require("./htmlTemplates");

const generateIndex = (req, res) => {
    const [head, opMain, cloMainHtml] = htmlArray
    const indexHtml = [head, opMain, index, cloMainHtml].join('')
    res.status(200).send(indexHtml)
}

function generateHtml(content, dashboardView) {
    const [head, opMain, cloMainHtml] = htmlArray
    let nav = `
    <nav class="nav" id="nav">
        <a href="">Productos</a>
        <a href="">Camisetas</a>
        <a href="">Pantalones</a>
        <a href="">Accesorios</a>
        <a href="">Login</a>
    </nav>
    `
    dashboardView === true
        ? nav += `<a href="/shop/dashboard/new" class="addBtn">Crear producto</a>`
        : nav

    return [head, nav, opMain, content, cloMainHtml].join('')
}

function printProductCards(products, dashboardView) {
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
    const deleteBtn = dashboardView === true ? `<a href="/shop/dashboard/${productId}/delete" class="btn">Borrar</a>` : ''
    return `
        <div class="product-card">
            <img src="${product.img || ''}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description || ''}</p>
            <h4>${product.price}€</h4>
            ${returnBtn}
            ${editBtn}
            ${deleteBtn}
        </div>`
}

module.exports = { generateHtml, generateIndex, printProductCards, printSingleProduct }