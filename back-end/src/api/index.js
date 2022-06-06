const express = require('express')
require('dotenv').config()
const { getAllBuyers } = require('./controllers/buyersController')
const { getAllProviders } = require('./controllers/providersController')
const { getAllOrders } = require('./controllers/ordersController')
const { frontGet } = require('./controllers/apiController')
const app = express()
const port = process.env.PORT || 3002

app.use(express.json())
app.listen(port, () => console.log(`Server running on port ${port}`))

app.get('/buyers', getAllBuyers)

app.get('/providers', getAllProviders)

app.get('/orders', getAllOrders)

app.get('/cashforce', frontGet)

module.exports = app
