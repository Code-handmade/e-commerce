const productRoute = require('express').Router()
const ProductController = require('../controllers/ProductController')
const { authentication } = require('../middlewares/auth')

productRoute.get('/', authentication, ProductController.getProducts)
productRoute.post('/add', authentication, ProductController.add)

module.exports = productRoute