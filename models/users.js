'use strict'
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    mobile: DataTypes.STRING,
    departament: DataTypes.STRING,
    verificationCode: DataTypes.STRING,
    emailChecked: DataTypes.BOOLEAN,
    cashforceAdm: DataTypes.BOOLEAN
  }, {
    modelName: 'users',
  })
  return users
}