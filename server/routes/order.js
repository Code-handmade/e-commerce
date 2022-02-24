const orderRoute = require('express').Router()
const OrderController = require('../controllers/OrderController')
const { authentication, authorization } = require('../middlewares/auth')

// orderRoute.get('/', authentication, OrderController.getProducts)
// orderRoute.get('/:id', authentication, OrderController.getById)
orderRoute.post('/create', authentication, OrderController.create)
// orderRoute.put('/edit/:id', authentication, authorization, OrderController.update)
// orderRoute.delete('/delete/:id', authentication, authorization, OrderController.remove)

module.exports = orderRoute