const { getOrders } = require('../services/ordersService')

const getAllOrders = async (req, res) => {
  const orders = await getOrders()
  res.status(200).json(orders)
}

module.exports = {
  getAllOrders
}