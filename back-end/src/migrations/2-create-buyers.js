'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('buyers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      tradingName: {
        type: Sequelize.STRING
      },
      cashforceTax: {
        type: Sequelize.STRING
      },
      responsibleName: {
        type: Sequelize.STRING
      },
      responsibleEmail: {
        type: Sequelize.STRING
      },
      responsiblePosition: {
        type: Sequelize.STRING
      },
      responsiblePhone: {
        type: Sequelize.STRING
      },
      responsibleMobile: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      postalCode: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      complement: {
        type: Sequelize.STRING
      },
      neighborhood: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      situation: {
        type: Sequelize.STRING
      },
      situationDate: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cnpjId: {
        type: Sequelize.INTEGER,
      },
      confirm: {
        type: Sequelize.BOOLEAN
      },
      email: {
        type: Sequelize.STRING
      }
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable('buyers')
  }
}