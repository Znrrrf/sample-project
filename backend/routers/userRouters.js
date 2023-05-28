const {userControllers} = require('../controllers');
const express = require('express')
const router = express.Router()


router.get('/', userControllers.getAllUser);
router.post('/register', userControllers.userRegis);



module.exports = router