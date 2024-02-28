const { baseHtml, index } = require("./htmlTemplates");

const replaceMain = (content) => baseHtml.replace(/<main class="main" id="main">[\s\S]*?<\/main>/s, `<main class="main" id="main">${content}</main>`)
const generateIndex = (req, res) => res.status(200).send(replaceMain(index))

function updateNavBar(dashboardView, html) {
    const addBtn = `<a href="/shop/dashboard/new">Crear producto</a>`
    return dashboardView === true
        ? html.replace(/<div class="addBtn"><\/div>/, `<div class="addBtn">${addBtn}</div>`)
        : html
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

function printSingleProduct(product, dashboardView, productId) {
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

module.exports = {
    replaceMain,
    updateNavBar,
    generateIndex,
    printProductCards,
    printSingleProduct
}