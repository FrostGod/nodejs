const path = require('path');

const express = require('express');

const admincontroller = require('../controllers/admin');

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', admincontroller.getAddProduct);


router.get('products');

// /admin/add-product => POST
router.post('/add-product', admincontroller.postAddProduct);

exports.routes = router;

