const express = require('express')
const app = express()
require('dotenv').config()

const dbConnection = require('./config/db')
dbConnection()



app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`))