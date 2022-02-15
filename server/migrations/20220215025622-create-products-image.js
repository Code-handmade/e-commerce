'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products_images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prim_file_name: {
        type: Sequelize.STRING
      },
      prim_file_size: {
        type: Sequelize.STRING
      },
      prim_file_type: {
        type: Sequelize.STRING
      },
      prim_primary: {
        type: Sequelize.BOOLEAN
      },
      productId: {
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
    await queryInterface.dropTable('products_images');
  }
};