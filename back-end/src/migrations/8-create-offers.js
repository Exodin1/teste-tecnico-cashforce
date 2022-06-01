'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tax: {
        type: Sequelize.STRING
      },
      tariff: {
        type: Sequelize.STRING
      },
      adValorem: {
        type: Sequelize.STRING
      },
      float: {
        type: Sequelize.STRING
      },
      iof: {
        type: Sequelize.STRING
      },
      expiresIn: {
        type: Sequelize.DATE
      },
      paymentStatusSponsor: {
        type: Sequelize.TINYINT
      },
      paymentStatusProvider: {
        type: Sequelize.TINYINT
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'orders',
          key: 'id'
        },
      },
      sponsorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sponsors',
          key: 'id'
        },
      },
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable('offers')
  }
}