'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_name: {
        type: Sequelize.STRING
      },
      order_created_on: {
        type: Sequelize.DATE
      },
      order_subtotal: {
        type: Sequelize.NUMBER
      },
      order_discount: {
        type: Sequelize.NUMBER
      },
      order_tax: {
        type: Sequelize.NUMBER
      },
      order_total_due: {
        type: Sequelize.NUMBER
      },
      order_total_qty: {
        type: Sequelize.INTEGER
      },
      order_trax_number: {
        type: Sequelize.STRING
      },
      order_city: {
        type: Sequelize.STRING
      },
      order_address: {
        type: Sequelize.STRING
      },
      order_status: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.NUMBER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};