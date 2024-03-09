// <a href="/"><img class="miniLogo" src="/img/logo.png" alt="logo"/></a>

const htmlArray = [`
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/styles.css">
        <title>Backend Corner Shop</title>
    </head>
    <body>
        <div class="header-wrapper">
        <header class="header">
        <a class="logo-container" href="/"></a>
`, `
        </header> 
        </div>  
        <main class="main" id="main">
`, `
        </main>
    </body>
</html>
`]

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
    <div class="newForm-container">
        <form class="form" id="newForm" action="/shop/dashboard" method="post">
            <label for="nameId">Nombre:</label>
            <input id="nameId" name="name" type="text" required>

            <label for="descriptionId">Descripción:</label>
            <textarea id="descriptionId" name="description"></textarea>

            <label for="priceId">Precio:</label>
            <input id="priceId" name="price" type="number" step="0.01" required>

            <label for="imgId">Imagen:</label>
            <input id="imgId" name="img" type="file" >

            <label for="categoryId">Categoría:</label>
            <select id="categoryId" name="category">
                <option value="Camisetas" name="Camisetas" selected>Camisetas</option>
                <option value="Pantalones" name="Pantalones">Pantalones</option>
                <option value="Zapatos" name="Zapatos">Zapatos</option>
                <option value="Accesorios" name="Accesorios">Accesorios</option>
            </select>

            <label for="sizeId">Talla:</label>
            <select id="sizeId" name="size">
                <option value="XS" name="XS" selected>XS</option>
                <option value="S" name="S">S</option>
                <option value="M" name="M">M</option>
                <option value="L" name="L">L</option>
                <option value="XL" name="XL">XL</option>
                <option value="Unitalla" name="Unitalla">Unitalla</option>
            </select>
            <button class="formBtn" type="submit">Crear</button>
        </form>
        <a class="formBtn cancelNew" href="/shop/dashboard">Cancelar</a>
    </div>
`

const registerForm = ` 
<h1>Registro</h1>
    <form class="form" id="registerForm" action="/shop/register" method="post"">
        <label for="emailId">Email:</label>
        <input type="email" id="emailId" name="email" required>

        <label for="passId">Contraseña:</label>
        <input type="password" id="passId" name="password" required>

        <div class="role">
            <label for="roleId">Administrador</label>
            <input type="checkbox" id="roleId" name="role">
        </div>
        
        <div class="warning"></div>
        <div class="btn-container">
            <button class="formBtn" type="submit">Registrarse</button>
            <a class="formBtn" href="/shop/login">Login</a>
            <a class="formBtn" href="/shop/products">Volver</a>
        </div>
    </form>`

const loginForm = ` 
<h1>Iniciar sesión</h1>
    <form class="form" id="loginForm" action="/shop/login" method="post"">
        <label for="emailId">Email:</label>
        <input type="email" id="emailId" name="email" required>

        <label for="passId">Contraseña:</label>
        <input type="password" id="passId" name="password" required>

        <div class="warning"></div>
        <div class="btn-container">
            <button class="formBtn" type="submit">Login</button>
            <a class="formBtn" href="/shop/register">Registrarse</a>
            <a class="formBtn" href="/shop/products">Volver</a>
        </div>
    </form>`

module.exports = { htmlArray, index, newProductForm, registerForm, loginForm }