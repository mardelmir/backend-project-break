const express = require('express')
const app = express()

const dbConnection = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const { baseHtml } = require('./utils/helpers')

require('dotenv').config()
dbConnection()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    const index = `
    <h1>INICIO</h1>
        <p>¿Dónde te gustaría ir?</p>
        <a href="/shop/products">Tienda</a>
        <a href="/api/products">Api</a>
        <a href="/api/api-docs">Documentación API</a>
    `
    const html = baseHtml.replace(/<main class="main" id="main">.*?<\/main>/s, `<main class="main" id="main">${index}</main>`)
    res.send(html)
})
app.use('/shop', productRoutes)



app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`))

// IMPORTANTE: para reemplazar contenido del HTML base:
// app.get('/', (req, res) => {
//     const nuevo = '¿Ha funcionado? SI HA FUNCIONADO :DDDD'
//     let html = baseHtml.replace(/<p id="test">.*?<\/p>/s, `<p id="test">${nuevo}</p>`)

//     res.send(html)
// })

// const path = require('node:path')
// opt 1: app.use(express.static('public'))
// opt 2: app.use('/static', express.static(__dirname + '/public'));
// opt 3: app.use(express.static(path.join(__dirname + 'public')));