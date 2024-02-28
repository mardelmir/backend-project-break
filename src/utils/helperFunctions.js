const { baseHtml, index } = require("./htmlTemplates");

const replaceMain = (content) => baseHtml.replace(/<main class="main" id="main">[\s\S]*?<\/main>/s, `<main class="main" id="main">${content}</main>`)
const replaceNavBar = (nav) => baseHtml.replace(/<nav class="nav" id="nav">[\s\S]*?<\/nav>/s, `<main class="main" id="main">${nav}</main>`)
const generateIndex = (req, res) => res.status(200).send(replaceMain(index))

function generateNavBar() {
    // categorías: Camisetas, Pantalones, Zapatos, Accesorios (gorra/gorro, cinturón, tote bags, llaveros/pines)
    // Si está en /dashboard además tiene enlace para subir nuevo producto (GET /dashboard/new)
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
    const editBtn = dashboardView === true ?`<a href="/dashboard/${productId}/edit" class="btn">Editar</a>` :''
    const deleteBtn = dashboardView === true ?`<a href="/dashboard/${productId}/delete" class="btn">Borrar</a>` :''

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
    replaceNavBar,
    generateIndex,
    generateNavBar,
    printProductCards,
    printSingleProduct
}