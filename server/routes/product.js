const productRoute = require('express').Router()
const ProductController = require('../controllers/ProductController')

productRoute.get('/', ProductController.getProducts)



module.exports = productRoute