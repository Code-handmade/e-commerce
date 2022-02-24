const cartRoute = require("express").Router();
const CartController = require("../controllers/CartController");
const { authentication } = require("../middlewares/auth");

cartRoute.get("/", authentication, CartController.getCarts);
// cartRoute.get('/:id', authentication, CartController.getById)
cartRoute.post("/add", authentication, CartController.add);
cartRoute.put("/edit/:id", authentication, CartController.update);
cartRoute.delete("/delete/:id", authentication, CartController.remove);

module.exports = cartRoute;
