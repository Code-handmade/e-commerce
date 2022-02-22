const { user } = require("../models");
const { decryptPwd } = require("../helpers/bcrypt");
const { tokenGenerator } = require("../helpers/jwt");

class UserController {
  static async getUserAll(req, res) {
    try {
      let users = await user.findAll();
      res.status(200).json(users);
    } catch (e) {
      res.status(500).json(e);
    }
  }
// get user by Id
  static async getById(req, res) {
    try {
      const id = +req.params.id;
      let result = await user.findByPk(id);
      result
        ? res.status(200).json(result)
        : res.status(404).json({
            message: `User not found!`,
          });
    } catch (e) {
      res.status(500).json({
        message: "Server Error",
      });
    }
  }
// Register
  static async register(req, res) {
    try {
      const { username, email, password, birth_date, gender, avatar, type } =
        req.body;
       

      let findEmail = await user.findOne({
        where: { email },
      });

      if (findEmail) {
        res.status(403).json({
          message: "User Already Exist !!!",
        });
      } else {
        let result = await user.create({
          username,
          email,
          password,
          birth_date,
          gender,
          avatar,
          type,
        });

        res.status(201).json(result);
      }
    } catch (e) {
      res.status(500).json();
    }
  }
//Login
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      let result = await user.findOne({
        where: {
          email,
        },
      });
      if (result) {
        if (decryptPwd(password, result.password)) {
          let token = tokenGenerator(result);

          res.status(200).json({
            access_token: token,
          });
        } else {
          res.status(400).json({
            message: "Password is not correct",
          });
        }
      } else {
        res.status(400).json({
          message: "User Not Found",
        });
      }
    } catch (e) {
      res.status(500).json(e);
    }
  }
  // Menghapus User
  static async remove(req, res) {
    try {
      const id = +req.params.id;
      let result = await user.destroy({ where: { id } });

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

  //Edit atau Update User
  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { username, email, password, birth_date, gender, avatar, type } =
        req.body;

      let result = await user.update(
        {
          username,
          email,
          password,
          birth_date,
          gender,
          avatar,
          type,
        },
        {
          where: { id },
        }
      );

      result[0] === 1
        ? res.status(201).json({
            message: `Id ${id} updated!`,
          })
        : res.status(400).json({
            message: `Id ${id} not updated!`,
          });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = UserController;
