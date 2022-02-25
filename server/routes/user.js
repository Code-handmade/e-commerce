const userRoute = require("express").Router();
const UserController = require("../controllers/UserController");
const { authentication } = require("../middlewares/auth");
// test
userRoute.delete("/delete/:id", UserController.remove);

userRoute.get("/all", UserController.getUserAll);
userRoute.post("/auth/register", UserController.register);
userRoute.post("/auth/login", UserController.login);
userRoute.get("/:id", authentication, UserController.getById);
userRoute.put("/edit/:id", authentication, UserController.update);
// userRoute.delete('/delete/:id', authentication, UserController.remove)

module.exports = userRoute;
