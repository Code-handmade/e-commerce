const { line_item, order, product, shopping_cart } = require("../models");

class LineItemController {
  static async getLineItem(req, res) {
    try {
    } catch (e) {
      res.status(500).json(e);
    }
  }
  static async add(req, res) {
    try {
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = LineItemController;
