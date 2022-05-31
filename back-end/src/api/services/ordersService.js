const { Order } = require('../../models')

const getOrders = async () => {
  const orders = await Order.findAll()
  return orders
}

module.exports = {
  getOrders
}