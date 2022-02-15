const router = require('express').Router();

router.get('/', (req, res)=>{
    res.status(200).json({
        message:"Home Page"
    })
})
const UserRoutes = require('./user')
// const ProductRoutes = require('./product')
// const ProductImageRoutes = require('./productsImage')
// const OrderRoutes = require('./order')
// const CartRoutes = require('./cart')
// const LineItemRoutes = require('./lineItem')

router.use('/users', UserRoutes)
// router.use('/products', ProductRoutes)
// router.use('/images', ProductImageRoutes)
// router.use('/orders', OrderRoutes)
// router.use('/carts', CartRoutes)
// router.use('/lineitems', LineItemRoutes)

module.exports = router