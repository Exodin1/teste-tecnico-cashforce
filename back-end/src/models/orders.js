'use strict'
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define({
    orderNfId: { type: DataTypes.STRING },
    orderNumber: { type: DataTypes.STRING },
    orderPath: { type: DataTypes.STRING },
    orderFileName: { type: DataTypes.STRING },
    orderOriginalName: { type: DataTypes.STRING },
    emissionDate: { type: DataTypes.STRING },
    pdfFile: { type: DataTypes.STRING },
    emitedTo: { type: DataTypes.STRING },
    nNf: { type: DataTypes.STRING },
    CTE: { type: DataTypes.STRING },
    value: { type: DataTypes.STRING },
    cnpjId: { type: DataTypes.INTEGER },
    userId: { type: DataTypes.INTEGER },
    buyerId: { type: DataTypes.INTEGER },
    providerId: { type: DataTypes.INTEGER },
    orderStatusBuyer: { type: DataTypes.STRING },
    orderStatusProvider: { type: DataTypes.STRING },
    deliveryReceipt: { type: DataTypes.STRING },
    cargoPackingList: { type: DataTypes.STRING },
    deliveryCtrc: { type: DataTypes.STRING }
  }, {
    tableName: 'orders',
  })
  return orders
}