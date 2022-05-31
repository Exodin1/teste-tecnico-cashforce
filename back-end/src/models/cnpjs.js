'use strict'
module.exports = (sequelize, DataTypes) => {
  const cnpj = sequelize.define('cnpjs', {
    cnpj: { type: DataTypes.STRING },
    companyType: { type: DataTypes.STRING },
  }, {
    tableName: 'cnpjs',
  })
  return cnpj
}