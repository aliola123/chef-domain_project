const express = require('express');
const productController = require('../controllers/productsController')
const { signUp, signIn } = require('../controllers/loginController');
const hashPassword = require('../middleware/hashPassword');
const fileUpload = require('../middleware/fileUpload')
const {signinValidator, signupValidator} = require('../validator/auth')
const validate = require('../validator/validate')
const isAuth = require('../middleware/isAuth')
const router = express.Router();


//PRODUCT ROUTES
router.get('/products/:id', productController.getProduct);//  To get a single product by its Id
router.get('/products', productController.getProducts);// This is to get all the products
router.post('/product',isAuth, productController.createProduct);//Protected route(Needs authorization)
router.put('/products/:id',isAuth, productController.updateProduct)//Protected
router.delete('/products/:id',isAuth, productController.deleteProduct)// Protected
router.post('/products/:id/upload',isAuth, fileUpload, productController.upload )// Protected

//AUTH ROUTES
router.post('/signup',hashPassword,signupValidator, validate, signUp); 
router.post('/signin',signinValidator, validate, signIn); 

// File Upload route
module.exports = router;
