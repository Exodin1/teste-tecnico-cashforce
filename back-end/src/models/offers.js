'use strict'
module.exports = (sequelize, DataTypes) => {
  const offers = sequelize.define('offers', {
    tax: DataTypes.STRING,
    tariff: DataTypes.STRING,
    adValorem: DataTypes.STRING,
    float: DataTypes.STRING,
    iof: DataTypes.STRING,
    expiresIn: DataTypes.DATE,
    paymentStatusSponsor: DataTypes.TINYINT,
    paymentStatusProvider: DataTypes.TINYINT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    orderId: DataTypes.INTEGER,
    sponsorId: DataTypes.INTEGER
  }, {
    modelName: 'offers',
  })
  return offers
}