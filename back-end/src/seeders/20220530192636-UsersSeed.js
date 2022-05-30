'use strict'
// INSERT INTO `users` (`id`, `name`, `email`, `phoneNumber`, `mobile`, `departament`, `verificationCode`, `emailChecked`, `createdAt`, `updatedAt`, `cashforceAdm`) VALUES
// (1, 'ALLAN SOUZA', 'allan@cashforce.com.br', NULL, NULL, NULL, '', 1, '2020-10-01 21:31:37', '2020-10-01 22:41:23', 1);

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
