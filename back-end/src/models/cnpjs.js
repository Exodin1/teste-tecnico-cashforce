const Cnpj = (sequelize, DataTypes) => {
  return sequelize.define('Cnpj', {
    cnpj: { type: DataTypes.STRING },
    companyType: { type: DataTypes.STRING },
  }, {
    tableName: 'cnpjs',
  })
}

module.exports = Cnpj