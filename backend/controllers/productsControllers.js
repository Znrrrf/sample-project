const db = require('../models');
const product = db.Products;
const cart = db.Carts;

module.exports = {
    getAllProduct: async (req, res) => {
        try {
            
            const result = await product.findAll()

            res.status(200).send({
                message:'success',
                result
            })

        } catch (error) {
            res.status(400).send(error)
        }
    },
    productRegis: async (req, res) => {
        try {
            
            const { product_name, price, qty, product_img, description } = req.body

            const result = await product.create({
                product_name, price, qty, product_img, description
            })

            res.status(200).send({message:'success', result})

        } catch (error) {
            res.status(400).send(error)
        }
    },
    productOnCart: async (req, res) => {
        try {
            
            const { product_id, user_id } = req.body;

            const onCart = await cart.findOne({
                where: {
                    product_id,
                    user_id
                },
                attributes: ['request_qty']
            })

            let result

            if ( onCart ) {
                
                result = await cart.update({
                    request_qty: onCart.request_qty + 1
                },{
                    where: {
                        product_id,
                        user_id
                    },
                    fields: ['request_qty', 'updatedAt']
                })

            } else {
                result = await cart.create({
                    product_id,
                    user_id,
                    request_qty: 1,
                })
            }
            

            res.status(200).send({
                message:"success",
                result
            })

        } catch (error) {
            res.status(400).send(error)
        }
    },
    getOneProduct: async (req, res) => {
        try {
            
            const { id } = req.body;

            const result = await product.findOne({
                where: {
                    id
                }
            })

            res.status(200).send({
                message: 'success',
                result
            })

        } catch (error) {
            res.status(400).send(error)
        }
    },
    getAllProductOnCart: async (req, res) => {
        try {
            
            const {user_id} = req.body;

            const result = await cart.findAll({
                where: {
                    user_id
                },
                attributes: ['product_id', 'request_qty']
            })

            const hasil = result.map((el) => el.product_id)
            const req_qty = result.map((el) => el.request_qty)

            const data = await product.findAll({
                where:{
                    id: hasil
                }
            })

            const price = await product.findAll({
                where: {
                    id: hasil
                },
                attributes: ["id",'price']
            })

            


            res.status(200).send({
                message: "success",
                data,
                req_qty,
                price,
                result
            })

        } catch (error) {
            res.status(400).send(error)
        }
    },
    deleteProductFromCart: async (req, res) => {
        try {
            
            const { product_id, user_id } = req.body


            const result = await cart.destroy({
                where:{
                    product_id,
                    user_id
                }
            })

            res.status(200).send({
                message: 'success',
                result
            })

        } catch (error) {
            res.status(400).send(error)
        }
    }
}