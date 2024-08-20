const express = require('express');
const productController = require('../controllers/productsController')
const { signUp, signIn } = require('../controllers/loginController');
const hashPassword = require('../middleware/hashPassword');
const fileUpload = require('../middleware/fileUpload')

const router = express.Router();


//PRODUCT ROUTES
router.get('/products/:id', productController.getProduct);// To get a single product by its Id
router.get('/products', productController.getProducts);// This is to get all the products
router.post('/product', productController.createProduct);
router.put('/products/:id', productController.updateProduct)
router.delete('/products/:id', productController.deleteProduct)
router.post('/product/:id/upload', fileUpload, productController.upload )

//AUTH ROUTES
router.post('/signup',hashPassword, signUp); 
router.post('/signin', signIn); 

// File Upload route
module.exports = router;
