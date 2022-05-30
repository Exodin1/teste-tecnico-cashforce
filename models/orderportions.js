'use strict'
module.exports = (sequelize, DataTypes) => {
  const orderPortions = sequelize.define({
    nDup: DataTypes.STRING,
    dVenc: DataTypes.STRING,
    vDup: DataTypes.STRING,
    availableToMarket: DataTypes.BOOLEAN,
    orderId: DataTypes.INTEGER
  }, {
    modelName: 'orderportions',
  })
  return orderPortions
}