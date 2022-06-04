module.exports = (sequelize, DataTypes) => {
  const Orderportion = sequelize.define('Orderportion', {
    nDup: { type: DataTypes.STRING },
    dVenc: { type: DataTypes.STRING },
    vDup: { type: DataTypes.STRING },
    availableToMarket: { type: DataTypes.BOOLEAN },
    orderId: { type: DataTypes.INTEGER }
  }, {
    tableName: 'orderportions',
  })
  Orderportion.associate = (models) => {
    Orderportion.belongsTo(models.Order, { foreignKey: 'orderId' })
  }
  return Orderportion
}
