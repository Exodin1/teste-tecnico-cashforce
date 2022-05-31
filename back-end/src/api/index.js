const express = require('express')

const app = express()
const port = 3000 || process.env.PORT

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
