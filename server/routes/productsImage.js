const productImageRoute = require("express").Router();
const ProductImageController = require("../controllers/ProductImageController");
const { authentication, authorization } = require("../middlewares/auth");
const { store } = require("../middlewares/multer");

// get data image all hariyono
productImageRoute.get("/", ProductImageController.getImages);
productImageRoute.get("/detail/:id", ProductImageController.detailById);

// productImageRoute.get('/:id', authentication, ProductImageController.getImages)
// productImageRoute.get('/:id', authentication, ProductImageController.getById)
productImageRoute.post("/add/:id", store, ProductImageController.add);
productImageRoute.put(
  "/edit/:id",
  authentication,
  authorization,
  ProductImageController.update
);
productImageRoute.delete(
  "/delete/:id",
  authentication,
  // authorization,
  ProductImageController.remove
);

module.exports = productImageRoute;
