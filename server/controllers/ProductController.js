
const { product, user } = require("../models");


class ProductController {
  // mengambil semua produk
  static async getProducts(req, res) {
    try {
      // const { id } = req.userData;
      let products = await product.findAll({});
      res.status(200).json(products);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  static async getProductsByUserId(req, res) {
    try {
      const { id } = req.userData;
      let products = await product.findAll({
        where: {
          userId: id,
        },
        include: [user],
      });
      res.status(200).json(products);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  
  static async search(req, res){
    try {
      let searchKey;
      for (let key in req.query) {
        searchKey = key
      }
      switch (searchKey) {
          case 'prod_name':
              let searchName = await product.findAll({
                  where: {
                    prod_name: req.query[searchKey]
                  }
              })

              res.json(searchName)
              break;
          case 'prod_price':
              let searchPrice = await product.findAll({
                  where: {
                      prod_price: req.query[searchKey]
                  }
              })

              res.json(searchPrice)

              break;
      }
  }
  catch (e) {
      res.json(e)
  }
  }
  // Menambah Product
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

      const { id } = req.userData;
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
  // get Product By Id
  static async getById(req, res) {
    try {
      const id = +req.params.id;
      let result = await product.findByPk(id);
      result
        ? res.status(200).json(result)
        : res.status(404).json({
            message: `Product not found!`,
          });
    } catch (e) {
      res.status(500).json({
        message: "Server Error",
      });
    }
  }

  // Menghapus Product
  static async remove(req, res) {
    try {
      const id = +req.params.id;
      let result = await product.destroy({ where: { id } });

      result === 1
        ? res.status(200).json({
            message: `Id ${id} deleted!`,
          })
        : res.status(400).json({
            message: `Id ${id} not deleted!`,
          });
    } catch (e) {
      res.status(500).json(e);
    }
  }
  //Edit atau Update Product
  static async update(req, res) {
    try {
      const id = +req.params.id;
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
        userId,
      } = req.body;

      let result = await product.update(
        {
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
          userId,
        },
        {
          where: { id },
        }
      );

      result[0] === 1
        ? res.status(201).json({
            message: `Id ${id} updated!`,
          })
        : res.status(400).json({
            message: `Id ${id} not updated!`,
          });
    } catch (e) {
      res.status(500).json(e);
    }
  }
  // search product by name
}

module.exports = ProductController;
