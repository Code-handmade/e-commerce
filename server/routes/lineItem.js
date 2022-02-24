const lineItemRoute = require('express').Router()
const LineItemController = require('../controllers/LineItemController')

lineItemRoute.get('/', LineItemController.getLineItem)
lineItemRoute.post('/add', LineItemController.add)


module.exports = lineItemRoute