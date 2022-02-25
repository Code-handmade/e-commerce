const productRoute = require("express").Router();
const ProductController = require("../controllers/ProductController");
const { authentication, authorization } = require("../middlewares/auth");

// user public hari
productRoute.get("/all", ProductController.getProducts);
productRoute.get("/:id", ProductController.getById);
productRoute.get("/:id", ProductController.getProductByIdPublic);
productRoute.delete("/delete/:id", ProductController.remove);
// fahrul
productRoute.get("/", authentication, ProductController.getProductsByUserId);
productRoute.get("/", authentication, ProductController.getProductsByUserId);
productRoute.get("/search", ProductController.search);
productRoute.get("/:id", authentication, ProductController.getById);
productRoute.post("/add", authentication, ProductController.add);
productRoute.put(
  "/edit/:id",
  authentication,
  // authorization,
  ProductController.update
);
// productRoute.delete(
//   "/delete/:id",
//   authentication,
//   authorization,
//   ProductController.remove
// );

module.exports = productRoute;
