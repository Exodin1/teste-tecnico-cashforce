const express = require('express')
require('dotenv').config()

const api = express()
const PORT = process.env.PORT
api.use(express.json())
api.listen(PORT, () => console.log(`Listening on port ${PORT}`))

api.get('/', (req, res) => {
  res.json('Hello world')
})