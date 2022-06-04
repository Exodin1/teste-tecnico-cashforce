'use strict'
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'ALLAN SOUZA',
      email: 'allan@cashforce.com.br',
      phoneNumber: null,
      mobile: null,
      departament: null,
      verificationCode: '',
      emailChecked: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      cashforceAdm: 1
    }])

  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
