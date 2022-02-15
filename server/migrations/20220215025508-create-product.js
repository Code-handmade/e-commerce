'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prod_name: {
        type: Sequelize.STRING
      },
      prod_desc: {
        type: Sequelize.STRING
      },
      prod_price: {
        type: Sequelize.NUMBER
      },
      prod_stock: {
        type: Sequelize.INTEGER
      },
      prod_expire: {
        type: Sequelize.DATE
      },
      prod_weight: {
        type: Sequelize.INTEGER
      },
      prod_category: {
        type: Sequelize.STRING
      },
      prod_brand: {
        type: Sequelize.STRING
      },
      prod_total_sold: {
        type: Sequelize.INTEGER
      },
      prod_rating: {
        type: Sequelize.INTEGER
      },
      prod_views: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('products');
  }
};