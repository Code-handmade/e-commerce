const { product, user } = require('../models')

const { tokenVerifier } = require('../helpers/jwt')

const authentication = (req, res, next) => {
 console.log("Authentication Middleware");
 const { access_token } = req.headers

 if (access_token) {

    try {
        let verify = tokenVerifier(access_token)
        req.userData = verify 
        next()
    } catch (e) {
        res.status(401).json({
            message:"User Not Authenticated"
        })
    }
     
 }else{
     res.status(404).json({
         message:"Token Not Found"
     })
 }
}

const authorization = (req, res, next)=>{
    console.log("Authorization Middleware");
    const id = +req.params.id
    const userId = +req.userData.id
    
    product.findByPk(id)
    .then(product=>{
        if (!product) {
            res.status(404).json({
                message:"Item not found"
            })
        } else if (product.userId !== userId) {
            res.status(401).json({
                message:"User Is not authorizad"
            })
        } else{
            next()
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
}


module.exports = {
    authentication,
    authorization
}