const { baseHtml, index } = require("./htmlTemplates");

const replaceMain = (content) => baseHtml.replace(/<main class="main" id="main">[\s\S]*?<\/main>/s, `<main class="main" id="main">${content}</main>`)
const replaceNavBar = (nav) => baseHtml.replace(/<nav class="nav" id="nav">[\s\S]*?<\/nav>/s, `<main class="main" id="main">${nav}</main>`)
const generateIndex = (req, res) => res.status(200).send(replaceMain(index))

function generateNavBar() {
    // categorías: Camisetas, Pantalones, Zapatos, Accesorios (gorra/gorro, cinturón, tote bags, llaveros/pines)
    // Si está en /dashboard además tiene enlace para subir nuevo producto (GET /dashboard/new)
}

function generateProductCards(products) {
    let html = '';
    for (let product of products) {
        html += `
            <div class="product-card">
            <img src="${product.image || ''}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description || ''}</p>
            <h4>${product.price}€</h4>
            <a href="/products/${product._id}">Ver detalle</a>
            </div>`
    }
    return html;
}

module.exports = { replaceMain, replaceNavBar, generateIndex, generateNavBar, generateProductCards }