const { line_item, order, product, shopping_cart } = require("../models");

class LineItemController {
  static async getLineItem(req, res) {
    try {
      // const { id } = req.userData;
      let lites = await line_item.findAll();
      res.status(200).json(lites);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  static async add(req, res) {
  
      try {
        const {
          lite_qty,
          lite_status,
          productId,
          shopId,
          orderId
        } = req.body;
  
        let result = await line_item.create({
          lite_qty,
          lite_status,
          productId,
          shopId,
          orderId
        });
        res.status(201).json(result);
      } catch (e) {
        res.status(500).json(e);
      }
  }
}

module.exports = LineItemController;
