const { Buyer } = require('../../models')

const getAll = async () => {
  const buyers = await Buyer.findAll()
  return buyers
}

module.exports = {
  getAll
}