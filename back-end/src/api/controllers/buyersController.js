const { getAll } = require('../services/buyersService')

const getAllBuyers = async (req, res) => {
  const buyers = await getAll()
  res.status(200).json(buyers)
}

module.exports = {
  getAllBuyers
}