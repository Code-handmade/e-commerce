'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products_image.belongsTo(models.product)
    }
  }
  products_image.init({
    prim_file_name: DataTypes.STRING,
    prim_file_size: DataTypes.STRING,
    prim_file_type: DataTypes.STRING,
    prim_primary: DataTypes.BOOLEAN,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products_image',
  });
  return products_image;
};