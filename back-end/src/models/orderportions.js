const Orderportion = (sequelize, DataTypes) => {
  return sequelize.define('Orderportion', {
    nDup: { type: DataTypes.STRING },
    dVenc: { type: DataTypes.STRING },
    vDup: { type: DataTypes.STRING },
    availableToMarket: { type: DataTypes.BOOLEAN },
    orderId: { type: DataTypes.INTEGER }
  }, {
    tableName: 'orderportions',
  })
}

module.exports = Orderportion