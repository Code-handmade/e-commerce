const {user} = require('../models')
const { decryptPwd } = require('../helpers/bcrypt')
const { tokenGenerator, tokenVerifier } = require('../helpers/jwt')


class UserController{
    static async getUserAll(req, res){
        try {
            let users = await user.findAll()
            res.status(200).json(users)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    static async register(req, res){
        try {
            const {username, email, password, birth_date, gender, avatar, type} = req.body

            let result= await user.create({
                username, email, password, birth_date, gender, avatar, type
            })

            res.status(201).json(result)
        } catch (e) {
           res.status(500).json() 
        }
    }

    static async login(req, res){
        try {
            const {email, password} = req.body
            let result = await user.findOne({
                where:{
                    email
                }
            })
            if(result){
                if (decryptPwd(password, result.password)) {
                    let token = tokenGenerator(result)
                    let decoded = tokenVerifier(token)
                    res.status(200).json({
                        access_token: token,
                        decoded
                    })
                } else {
                    res.status(400).json({
                        message:"Password is not correct"
                    });
                }
            }else{
                res.status(400).json({
                    message:"User Not Found"
                })
            }
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

module.exports = UserController