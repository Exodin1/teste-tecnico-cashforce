const { Order } = require('../../models')
const { Buyer } = require('../../models')
const { Provider } = require('../../models')

//pegar o "name" da tabela buyers, o "name" da providers, "emissionDate" de orders, "value" de orders, "ordersStatusBuyers" de orders

const frontEndGet = async () => {
  const orders = await Order.findAll({
    attributes: [
      'emissionDate',
      'value',
      'orderStatusBuyer',
      'orderNfId',
    ]
  })
  const buyers = await Buyer.findAll({
    attributes: ['name']
  })
  const providers = await Provider.findAll({
    attributes: ['name']
  })
  return { orders, buyers, providers }

}

module.exports = { frontEndGet }