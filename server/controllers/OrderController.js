const { order, user } = require("../models");

class OrderController {
  static async create(req, res) {
    try {
      const {
        order_name,
        order_created_on,
        order_subtotal,
        order_discount,
        order_tax,
        order_total_due,
        order_total_qty,
        order_trax_number,
        order_city,
        order_address,
        order_status,
      } = req.body;
      const { id } = req.userData;
      let result = await order.create({
        order_name,
        order_created_on,
        order_subtotal,
        order_discount,
        order_tax,
        order_total_due,
        order_total_qty,
        order_trax_number,
        order_city,
        order_address,
        order_status,
        userId:id
      })
      res.status(201).json(result);
    } catch (error) {
        req.status(500).json(error)
    }
  }
}

module.exports = OrderController;
