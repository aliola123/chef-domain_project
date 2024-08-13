const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController')

// Routes
router.get('/products/:id', productController.getProduct);
router.get('/products', productController.getProducts);
router.post('/product', productController.createProduct);




module.exports = router;