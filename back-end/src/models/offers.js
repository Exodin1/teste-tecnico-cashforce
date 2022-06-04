module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    tax: { type: DataTypes.STRING },
    tariff: { type: DataTypes.STRING },
    adValorem: { type: DataTypes.STRING },
    float: { type: DataTypes.STRING },
    iof: { type: DataTypes.STRING },
    expiresIn: { type: DataTypes.DATE },
    paymentStatusSponsor: { type: DataTypes.TINYINT },
    paymentStatusProvider: { type: DataTypes.TINYINT },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
    orderId: { type: DataTypes.INTEGER },
    sponsorId: { type: DataTypes.INTEGER }
  }, {
    tableName: 'offers',
  })
  Offer.associate = (models) => {
    Offer.belongsTo(models.Order, { foreignKey: 'orderId' })
    Offer.belongsTo(models.Sponsor, { foreignKey: 'sponsorId' })
  }
  return Offer
}
