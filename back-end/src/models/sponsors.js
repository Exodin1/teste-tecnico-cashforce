module.exports = (sequelize, DataTypes) => {
  const Sponsor = sequelize.define('Sponsor', {
    name: { type: DataTypes.STRING },
    tradingName: { type: DataTypes.STRING },
    cashforceTax: { type: DataTypes.STRING },
    responsibleName: { type: DataTypes.STRING },
    responsibleEmail: { type: DataTypes.STRING },
    responsiblePosition: { type: DataTypes.STRING },
    responsiblePhone: { type: DataTypes.STRING },
    responsibleMobile: { type: DataTypes.STRING },
    website: { type: DataTypes.STRING },
    postalCode: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    number: { type: DataTypes.STRING },
    complement: { type: DataTypes.STRING },
    neighborhood: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    bank: { type: DataTypes.STRING },
    bankAgency: { type: DataTypes.STRING },
    account: { type: DataTypes.STRING },
    phoneNumber: { type: DataTypes.STRING },
    situation: { type: DataTypes.STRING },
    situationDate: { type: DataTypes.STRING },
    cnpjId: { type: DataTypes.INTEGER },
    email: { type: DataTypes.STRING }
  }, {
    tableName: 'sponsors',
  })
  Sponsor.associate = (models) => {
    Sponsor.belongsTo(models.Cnpj, {
      foreignKey: 'cnpjId'
    })
  }
  return Sponsor
}
