const path = require('path');

const express = require('express');

const shopcontroller = require('../controllers/shop');


const router = express.Router();

router.get('/', shopcontroller.getProducts );

router.get('/cart');

router.get('/products');

router.get('/checkout');



module.exports = router;
