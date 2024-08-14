const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController')

// Routes
router.get('/products/:id', productController.getProduct);// To get a single product by its Id
router.get('/products', productController.getProducts);// This is to get all the products
router.post('/product', productController.createProduct);
router.put('/products/:id', productController.updateProduct)
router.delete('/products/:id', productController.deleteProduct)


module.exports = router;