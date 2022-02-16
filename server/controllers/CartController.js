const { shopping_cart, user } = require("../models");

class CartController {
  // mengambil semua card
  static async getCarts(req, res) {
    try {
      const { id } = req.userData;
      let carts = await shopping_cart.findAll({
        where: {
          userId: id,
        },
        include: [user],
      });
      res.status(200).json(carts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  // Menambah Cart
  static async add(req, res) {
    try {
      const { shop_created_on, shop_status } = req.body;

      const { id } = req.userData;
      let result = await shopping_cart.create({
        shop_created_on,
        shop_status,
        userId: id,
      });
      res.status(201).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  //   // get Cart By Id
  //   static async getById(req, res) {
  //     try {
  //       const id = +req.params.id;
  //       let result = await shopping_cart.findByPk(id, {
  //         include: [user],
  //       });
  //       result
  //         ? res.status(200).json(result)
  //         : res.status(404).json({
  //             message: `Cart not found!`,
  //           });
  //     } catch (e) {
  //       res.status(500).json({
  //         message: "Server Error",
  //       });
  //     }
  //   }

  // Menghapus Cart
  static async remove(req, res) {
    try {
      const id = +req.params.id;
      let result = await shopping_cart.destroy({ where: { id } });

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
      const { shop_created_on, shop_status, userId } = req.body;

      let result = await shopping_cart.update(
        {
          shop_created_on,
          shop_status,
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
}

module.exports = CartController;
