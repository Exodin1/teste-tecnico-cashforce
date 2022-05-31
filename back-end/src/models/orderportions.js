'use strict'
module.exports = (sequelize, DataTypes) => {
  const orderPortions = sequelize.define({
    nDup: { type: DataTypes.STRING },
    dVenc: { type: DataTypes.STRING },
    vDup: { type: DataTypes.STRING },
    availableToMarket: { type: DataTypes.BOOLEAN },
    orderId: { type: DataTypes.INTEGER }
  }, {
    tableName: 'orderportions',
  })
  return orderPortions
}