const express = require('express');
const router = express.Router();
const { productControllers } = require('../controllers');


router.get('/', productControllers.getAllProduct);
router.post('/register', productControllers.productRegis);
router.post('/cart', productControllers.productOnCart);
router.post('/product-detail', productControllers.getOneProduct);
router.post("/product-on-cart", productControllers.getAllProductOnCart);
router.delete('/delete-cart', productControllers.deleteProductFromCart);


module.exports = router;