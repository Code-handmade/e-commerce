'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // hasMany
      product.hasMany(models.products_image)
      product.hasMany(models.line_item)
      // belongsTo
      product.belongsTo(models.user)
    }
  }
  product.init({
    prod_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Name must be not empty",
        }
      }
    },
    prod_desc: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Description must be not empty",
        }
      }
    },
    prod_price: {
      type: DataTypes.NUMBER,
      validate: {
        notEmpty: {
          message: "Price must be not empty",
        }
      }
    },
    prod_stock: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Stock must be not empty",
        }
      }
    },
    prod_expire: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          message: "Expiry must be not empty",
        }
      }
    },
    prod_weight: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Weight must be not empty",
        }
      }
    },
    prod_category: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Category must be not empty",
        }
      }
    },
    prod_brand: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Category must be not empty",
        }
      }
    },
    prod_total_sold: DataTypes.INTEGER,
    prod_rating: DataTypes.INTEGER,
    prod_views: DataTypes.INTEGER,
    userId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};