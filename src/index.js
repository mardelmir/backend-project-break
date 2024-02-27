const express = require('express')
const app = express()
const multer = require('multer')
const upload = multer()

const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

const dbConnection = require('./config/db')
const productRoutes = require('./routes/index')
const { generateIndex } = require('./utils/helperFunctions')

require('dotenv').config()
dbConnection()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(upload.none())

app.get('/', generateIndex)
app.use('/shop', productRoutes)
app.use('/api', productRoutes)
app.use('/api/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`))