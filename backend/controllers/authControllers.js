const db = require('../models');
const user = db.User;


module.exports = {
    userLogin: async (req, res) => {
        try {
            
            const {email, password} = req.body;

            const result = await user.findOne({
                where:{
                    email,
                    password
                }
            })

            res.status(200).send({
                message: 'login success',
                result
            })

        } catch (error) {
            res.status(400).send(error)
        }
    }
}