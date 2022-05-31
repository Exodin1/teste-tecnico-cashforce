const { Provider } = require('../../models')

const getProviders = async () => {
  const providers = await Provider.findAll()
  return providers
}

module.exports = {
  getProviders
}