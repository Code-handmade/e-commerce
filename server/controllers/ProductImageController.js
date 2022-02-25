const { products_image, product } = require("../models");

class ProductImageController {
  // static async getImages(req, res) {
  //   try {
  //     const id = +req.params.id;
  //     let image = await products_image.findAll({
  //       where: {
  //         productId: id,
  //       },

  //       order: [["id", "ASC"]],
  //       include: [product],
  //     });
  //     res.status(200).json(image);
  //   } catch (e) {
  //     res.status(500).json(e);
  //   }
  // }
  // get product all hariyono
  static async getImages(req, res) {
    try {
      const id = +req.params.id;
      let image = await products_image.findAll({
        order: [["id", "ASC"]],
        include: [product],
      });
      res.status(200).json(image);
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  }
  static async add(req, res) {
    try {
      const productId = +req.params.id;
      // let prim_file_name = req.file.filename;
      let prim_file_name =
        req.protocol + "://" + req.get("host") + "/assets/" + req.file.filename;

      let prim_file_size = req.file.size;
      let prim_file_type = req.file.mimetype;

      if (prim_file_size >= 2000000) {
        return res.status(400).json({
          message: "Image should less be than 2 MB",
        });
      } else {
        let result = await products_image.create({
          prim_file_name,
          prim_file_size,
          prim_file_type,
          prim_primary: true,
          productId,
        });
        res.status(201).json(result);
      }
    } catch (e) {
      res.status(500).json(e);
    }
  }
  static async update(req, res) {
    try {
      const productId = +req.params.id;
      let prim_file_name = req.file.filename;
      let prim_file_size = req.file.size;
      let prim_file_type = req.file.mimetype;

      let result = await products_image.update(
        {
          prim_file_name,
          prim_file_size,
          prim_file_type,
        },
        {
          where: { productId },
        }
      );
      res.status(201).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  // Menghapus Images
  static async remove(req, res) {
    try {
      const id = +req.params.id;
      let result = await products_image.destroy({ where: { id } });

      result === 1
        ? res.status(200).json({
            message: `Id ${id} deleted!`,
          })
        : res.status(400).json({
            message: `Id ${id} not deleted!`,
          });
    } catch (e) {
      res.status(500).json(e);
    }
  }

  // get by Id
  static async detailById(req, res) {
    try {
      const id = +req.params.id;
      console.log(id);
      const result = await products_image.findByPk(id);
      result
        ? res.status(200).json(result)
        : res.status(404).json({
            message: `Product not found!`,
          });
    } catch (e) {
      res.status(500).json({
        message: "Server Error",
      });
      console.log(e);
    }
  }
}

module.exports = ProductImageController;
