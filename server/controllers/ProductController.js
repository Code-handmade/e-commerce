const { product, user } = require("../models");

class ProductController {
  static async getProducts(req, res) {
    try {
      const { id } = req.userData;
      let products = await product.findAll({
        where: {
          userId:id,
        },
        include:[
            user
        ]
      });
      res.status(200).json(products);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  static async add(req, res) {
    try {
      const {
        prod_name,
        prod_desc,
        prod_price,
        prod_stock,
        prod_expire,
        prod_weight,
        prod_category,
        prod_brand,
        prod_total_sold,
        prod_rating,
        prod_views,
      } = req.body;

      const{id} = req.userData
      let result = await product.create({
        prod_name,
        prod_desc,
        prod_price,
        prod_stock,
        prod_expire,
        prod_weight,
        prod_category,
        prod_brand,
        prod_total_sold,
        prod_rating,
        prod_views,
        userId: id,
      });
      res.status(201).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  static async findById(req, res) {
    try {
    } catch (e) {
      res.status(500).json(e);
    }
  }
  static async remove(req, res) {
    try {
    } catch (e) {
      res.status(500).json(e);
    }
  }
  static async update(req, res) {
    try {
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = ProductController;
