const baseHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles.css">
    <title>Backend Corner Shop</title>
</head>
<body>
    <header>
        <nav class="nav" id="nav"></nav>
    </header>
    <main class="main" id="main"></main>
</body>
</html>`

const index = `
<h1>INICIO</h1>
    <p class="question">¿Dónde te gustaría ir?</p>
    <div class="option-container">
        <a href="/shop/products">Tienda</a>
        <a href="/api/products">Api</a>
        <a href="/api/api-docs">Documentación API</a>
    </div>
`

const newProductForm = `
<h1>Crear producto</h1>
    <! --<form class="form" id="newForm" action="/shop/dashboard" method="post"> -->
    <form class="form" id="newForm" action="/shop/dashboard" method="post">
        <label for="nameId">Nombre:</label>
        <input id="nameId" name="name" type="text" required>

        <label for="descriptionId">Descripción:</label>
        <textarea id="descriptionId" name="description"></textarea>

        <label for="priceId">Precio:</label>
        <input id="priceId" name="price" type="number" required>

        <label for="imgId">Imagen:</label>
        <input id="imgId" name="img" type="file" >

        <label for="categoryId">Categoría:</label>
        <select id="categoryId" name="category">
            <option value="Camisetas" name="tshirts" selected>Camisetas</option>
            <option value="Pantalones" name="pants">Pantalones</option>
            <option value="Zapatos" name="shoes">Zapatos</option>
            <option value="Accesorios" name="accessories">Accesorios</option>
        </select>

        <label for="sizeId">Talla:</label>
        <select id="sizeId" name="size">
            <option value="XS" name="XS" selected>XS</option>
            <option value="S" name="S">S</option>
            <option value="M" name="M">M</option>
            <option value="L" name="L">L</option>
            <option value="XL" name="XL">XL</option>
            <option value="Unitalla" name="Uni">Unitalla</option>
        </select>

        <button type="submit">Crear</button>
    </form>
`
const editProductForm = `
<h1>Editar producto</h1>
    <form class="form" id="editForm" action="/shop/dashboard" method="put">
        <label for="nameId">Nombre:</label>
        <input id="nameId" name="name" type="text" required>

        <label for="descriptionId">Descripción:</label>
        <textarea id="descriptionId" name="description"></textarea>

        <label for="priceId">Precio:</label>
        <input id="priceId" name="price" type="number" required>

        <label for="imgId">Imagen:</label>
        <input id="imgId" name="img" type="file" >

        <label for="categoryId">Categoría:</label>
        <select id="categoryId" name="category">
            <option value="Camisetas" name="tshirts" selected>Camisetas</option>
            <option value="Pantalones" name="pants">Pantalones</option>
            <option value="Zapatos" name="shoes">Zapatos</option>
            <option value="Accesorios" name="accessories">Accesorios</option>
        </select>

        <label for="sizeId">Talla:</label>
        <select id="sizeId" name="size">
            <option value="XS" name="XS" selected>XS</option>
            <option value="S" name="S">S</option>
            <option value="M" name="M">M</option>
            <option value="L" name="L">L</option>
            <option value="XL" name="XL">XL</option>
            <option value="Unitalla" name="Uni">Unitalla</option>
        </select>

        <button type="submit">Guardar</button>
        <button type="reset">Borrar</button>
        <a href="/shop/dashboard"><button>Cancelar</button></a>
    </form>
`

module.exports = { baseHtml, index, newProductForm, editProductForm }