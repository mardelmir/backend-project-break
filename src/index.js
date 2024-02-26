const express = require('express')
const app = express()

const dbConnection = require('./config/db')
const productRoutes = require('./routes/index')
const { generateIndex } = require('./utils/helperFunctions')

const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

require('dotenv').config()
dbConnection()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', generateIndex)
app.use('/shop', productRoutes)
app.use('/api', productRoutes)
app.use('/api/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`))



// const path = require('node:path')
// opt 1: app.use(express.static('public'))
// opt 2: app.use(express.static(path.join(__dirname + 'public')));