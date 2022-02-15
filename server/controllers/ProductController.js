const { product } = require('../models')


class ProductController{
    static async getProducts(req, res){
        try {
            let products = await product.findAll()
            res.status(200).json(products)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    static async add(req, res){
        try {
            
        } catch (e) {
            res.status(500).json(e)
        }
    }
    static async findById(req, res){
        try {
            
        } catch (e) {
            res.status(500).json(e)
        }
    }
    static async remove(req, res){
        try {
            
        } catch (e) {
            res.status(500).json(e)
        }
    }
    static async update(req, res){
        try {
            
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = ProductController