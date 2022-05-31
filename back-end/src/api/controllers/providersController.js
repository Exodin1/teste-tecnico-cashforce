const { getProviders } = require('../services/providersService')

const getAllProviders = async (req, res) => {
  const providers = await getProviders()
  res.status(200).json(providers)
}

module.exports = {
  getAllProviders
}