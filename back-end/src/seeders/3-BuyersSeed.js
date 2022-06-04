'use strict'
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('buyers', [{
      id: 1,
      name: 'SACADO 001',
      tradingName: 'SACADO 001 LTDA',
      cashforceTax: '0',
      responsibleName: null,
      responsibleEmail: null,
      responsiblePosition: null,
      responsiblePhone: null,
      responsibleMobile: null,
      website: null,
      postalCode: null,
      address: null,
      number: null,
      complement: null,
      neighborhood: null,
      city: null,
      state: null,
      phoneNumber: null,
      situation: null,
      situationDate: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      cnpjId: null,
      confirm: 1,
      email: null
    }])
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('buyers', null, {})
  }
}
