const { default: mongoose } = require('mongoose');
const Product = require('../models/product');


const createProduct = async (req, res, next)=>{
    console.log("POST /api/product called");
    try{
         const product = new Product(req.body);

         await product.save();
        res.status(200).json(product)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

const getProduct = async (req, res, next)=>{
    try{
        const productId = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(productId)){
            return res.status(400).json({error:"Invalid product Id format"})
        }
        const product = await Product.findById(productId);
        
        if(!product){
           return res.status(404).json("Product not found");
        }
        res.status(200).json(product);
        
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

const getProducts = async (req, res, next)=>{
    try{
        const products = await Product.find();
        res.status(200).json({products});
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
    
}

module.exports = {
    createProduct, getProduct, getProducts
}

