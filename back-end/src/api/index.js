const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3002

app.use(express.json())
app.listen(port, () => console.log(`Server running on port ${port}`))

app.get('/buyers', (req, res) => {
  res.send('get buyers')
})

app.get('/providers', (req, res) => {
  res.send('get providers')
})

app.get('/orders', (req, res) => {
  res.send('get orders')
})
