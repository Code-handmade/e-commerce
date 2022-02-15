const productRoute = require('express').Router()
const ProductController = require('../controllers/ProductController')
const { authentication } = require('../middlewares/auth')

productRoute.get('/', authentication, ProductController.getProducts)
productRoute.get('/:id', authentication, ProductController.getById)
productRoute.post('/add', authentication, ProductController.add)
productRoute.put('/edit/:id', authentication, ProductController.update)
productRoute.delete('/delete/:id', authentication, ProductController.remove)

module.exports = productRoute