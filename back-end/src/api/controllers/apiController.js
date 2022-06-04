const { frontEndGet } = require('../services/apiService')

const frontGet = async (req, res) => {
  const orders = await frontEndGet()
  res.status(200).json(orders)
}

module.exports = { frontGet }