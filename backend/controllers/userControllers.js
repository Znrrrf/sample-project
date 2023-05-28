const db = require('../models');
const user = db.User;


module.exports = {
    getAllUser: async (req, res) => {
        try {
            
            const result = await user.findAll()

            res.status(200).send({
                message: "success",
                result
            })

        } catch (error) {
            req.status(200).send(error)
        }
    },
    userRegis: async (req, res) => {
        try {
            
            const {email, password} = req.body

            const result = await user.create({
                email,
                password
            })

            res.status(200).send({
                message: 'resigister success',
                result
            })

        } catch (error) {
            res.status(400).send(error)
        }
    }
}