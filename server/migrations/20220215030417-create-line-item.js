'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('line_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lite_qty: {
        type: Sequelize.INTEGER
      },
      lite_status: {
        type: Sequelize.STRING
      },
      productId: {
        type: Sequelize.NUMBER
      },
      shopId: {
        type: Sequelize.NUMBER
      },
      orderId: {
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
    await queryInterface.dropTable('line_items');
  }
};