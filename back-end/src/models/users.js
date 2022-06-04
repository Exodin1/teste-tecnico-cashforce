const User = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    phoneNumber: { type: DataTypes.STRING },
    mobile: { type: DataTypes.STRING },
    departament: { type: DataTypes.STRING },
    verificationCode: { type: DataTypes.STRING },
    emailChecked: { type: DataTypes.BOOLEAN },
    cashforceAdm: { type: DataTypes.BOOLEAN }
  }, {
    tableName: 'users',
  })
}

module.exports = User