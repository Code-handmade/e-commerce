const { products_image } = require("../models");

class ProductImageController {
  static async add(req, res) {
        try {
            const files = req.files
            if(!files){
                const error = new Error('Please choose file')
                error.status(400).json(error)
            }else{
                res.json(files)
            }
        } catch (e) {
            res.status(500).json(e)
        }
  }
}

module.exports = ProductImageController;
