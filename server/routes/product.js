const productRoute = require('express').Router()
const ProductController = require('../controllers/ProductController')
const { authentication, authorization } = require('../middlewares/auth')

productRoute.get('/', ProductController.getProductsByUserId)
productRoute.get('/search', ProductController.search)
productRoute.get('/all', ProductController.getProducts)
productRoute.get('/:id', ProductController.getById)
productRoute.post('/add', authentication, ProductController.add)
productRoute.put('/edit/:id', authentication, authorization, ProductController.update)
productRoute.delete('/delete/:id', authentication, authorization, ProductController.remove)

module.exports = productRoute