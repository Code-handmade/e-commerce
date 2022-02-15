'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class line_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      line_item.belongsTo(models.product)
      line_item.belongsTo(models.shopping_cart)
      line_item.belongsTo(models.order)
    }
  }
  line_item.init({
    lite_qty: DataTypes.INTEGER,
    lite_status: DataTypes.STRING,
    productId: DataTypes.NUMBER,
    shopId: DataTypes.NUMBER,
    orderId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'line_item',
  });
  return line_item;
};