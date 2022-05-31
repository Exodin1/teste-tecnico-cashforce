'use strict'
module.exports = (sequelize, DataTypes) => {
  const offers = sequelize.define('offers', {
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
  return offers
}