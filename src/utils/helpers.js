const baseHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../public/styles.css">
    <title>Backend Corner Shop</title>
</head>
<body>
    <header class="nav" id="nav">
    </header>
    <main class="main" id="main">
    </main>
</body>
</html>`

function generateNavBar() {

    // categorías: Camisetas, Pantalones, Zapatos, Accesorios (gorra/gorro, cinturón, tote bags, llaveros/pines)
    // Si está en /dashboard además tiene enlace para subir nuevo producto (GET /dashboard/new)

}

function generateProductCards(products) {
    let html = '';

    for (let product of products) {
        html += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <h4>${product.price}€</h4>
          <a href="/products/${product._id}">Ver detalle</a>
        </div>`;
    }

    return html;
}

module.exports = { baseHtml, generateNavBar, generateProductCards }