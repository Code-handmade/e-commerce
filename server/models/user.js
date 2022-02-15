"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.product);
      user.hasMany(models.order);
      user.hasMany(models.shopping_cart);
    }
  }
  user.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Username must be not empty",
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Email must be not empty",
          },
          isEmail:{
            message:"Not email format"
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Password must be not empty",
          }
        }
      },
      birth_date: {
        type: DataTypes.DATEONLY,
        validate: {
          notEmpty: {
            message: "Birth date must be not empty",
          }
        }
      },
      gender: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Gender must be not empty",
          }
        }
      },
      avatar: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Avatar must be not empty",
          }
        }
      },
      type: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Type must be not empty",
          }
        }
      }
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
