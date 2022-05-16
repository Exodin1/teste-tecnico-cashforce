'use strict'
module.exports = (sequelize, DataTypes) => {
  const cnpj = sequelize.define('cnpjs', {
    cnpj: DataTypes.STRING,
    companyType: DataTypes.STRING,
  }, {
    tableName: 'cnpjs',
  })
  return cnpj
}