const express = require('express')
const app = express()
const dotenv = require('dotenv')

const dbConnection = require('./config/db')

dotenv.config()
dbConnection()



app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`))