const productRoute = require('express').Router()
const ProductController = require('../controllers/ProductController')
const { authentication, authorization } = require('../middlewares/auth')

productRoute.get('/', authentication, ProductController.getProducts)
productRoute.get('/:id', authentication, ProductController.getById)
productRoute.post('/add', authentication, ProductController.add)
productRoute.put('/edit/:id', authentication, authorization, ProductController.update)
productRoute.delete('/delete/:id', authentication, authorization, ProductController.remove)

module.exports = productRoute