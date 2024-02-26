const baseHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="../public/styles.css"> -->
    <title>Backend Corner Shop</title>
</head>
<body>
    <header>
        <nav class="nav" id="nav"></nav>
    </header>
    <main class="main" id="main">
        <h1>COCRETA</h1>   
        <p id="test">Test</p>
    </main>
</body>
</html>`

const index = `
<h1>INICIO</h1>
    <p>¿Dónde te gustaría ir?</p>
    <a href="/shop/products">Tienda</a>
    <a href="/api/products">Api</a>
    <a href="/api/api-docs">Documentación API</a>
`

const newProductForm = `
<h1>Crear producto</h1>
    <form class="form" id="newForm" action="/dashboard" method="post" enctype="multipart/form-data">
        <label for="name">Nombre:</label>
        <input id="name" name="name" type="text" required>

        <label for="description">Descripción:</label>
        <textarea id="description" name="description"></textarea>

        <label for="price">Precio:</label>
        <input id="price" name="price" type="number" required>

        <label for="img">Imagen:</label>
        <input id="img" type="file" >

        <label for="category">Categoría:</label>
        <select name="category">
            <option value="tshirts" name="tshirts" selected>Camisetas</option>
            <option value="pants" name="pants">Pantalones</option>
            <option value="shoes" name="shoes">Zapatos</option>
            <option value="accessories" name="accessories">Accesorios</option>
        </select>

        <label for="size">Talla:</label>
        <select name="size">
            <option value="XS" name="XS" selected>XS</option>
            <option value="S" name="S">S</option>
            <option value="M" name="M">M</option>
            <option value="L" name="L">L</option>
            <option value="XL" name="XL">XL</option>
            <option value="Uni" name="Uni">Unitalla</option>
        </select>

        <button type="submit">Crear</button>
    </form>
`
const editProductForm = `
<h1>Editar producto</h1>
    <form class="form" id="editForm" action="/dashboard" method="put" enctype="multipart/form-data">
        <label for="name">Nombre:</label>
        <input id="name" name="name" type="text" required>

        <label for="description">Descripción:</label>
        <textarea id="description" name="description"></textarea>

        <label for="price">Precio:</label>
        <input id="price" name="price" type="number" required>

        <label for="img">Imagen:</label>
        <input id="img" type="file" >

        <label for="category">Categoría:</label>
        <select name="category">
            <option value="tshirts" name="tshirts" selected>Camisetas</option>
            <option value="pants" name="pants">Pantalones</option>
            <option value="shoes" name="shoes">Zapatos</option>
            <option value="accessories" name="accessories">Accesorios</option>
        </select>

        <label for="size">Talla:</label>
        <select name="size">
            <option value="XS" name="XS" selected>XS</option>
            <option value="S" name="S">S</option>
            <option value="M" name="M">M</option>
            <option value="L" name="L">L</option>
            <option value="XL" name="XL">XL</option>
            <option value="Uni" name="Uni">Unitalla</option>
        </select>

        <button type="submit">Guardar</button>
        <button type="reset">Borrar</button>
        <a href="/dashboard"><button>Cancelar</button></a>
    </form>
`

module.exports = { baseHtml, index, newProductForm, editProductForm }