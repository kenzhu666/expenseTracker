const path = require('path')
const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cors = require('cors')
const path = require('path')

dotenv.config({ path: './config/config.env' })
connectDB()
const transactions = require('./routes/transactions')

const app = express()

// bodyParser to use req.body
app.use(express.json())

// morgan
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}


app.use('/api/v1/transactions', transactions)
app.use(cors())


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))