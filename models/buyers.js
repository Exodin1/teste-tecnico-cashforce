module.exports = (sequelize, DataTypes) => {
  const Buyer = sequelize.define('Buyer', {
    name: DataTypes.STRING,
    tradingName: DataTypes.STRING,
    cashforceTax: DataTypes.STRING,
    responsibleName: DataTypes.STRING,
    responsibleEmail: DataTypes.STRING,
    responsiblePosition: DataTypes.STRING,
    responsiblePhone: DataTypes.STRING,
    responsibleMobile: DataTypes.STRING,
    website: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.STRING,
    complement: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    situation: DataTypes.STRING,
    situationDate: DataTypes.STRING,
    cnpjId: DataTypes.INTEGER,
    confirm: DataTypes.BOOLEAN,
    email: DataTypes.STRING
  }, {
    tableName: 'buyers',
    timestamps: false
  })

  // Buyer.associate = models => {
  //   Buyer.hasMany(models.Product, {
  //     foreignKey: 'buyerId',
  //     as: 'products'
  //   })
  // }
  return Buyer
}