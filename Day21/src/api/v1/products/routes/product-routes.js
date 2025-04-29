
const { default: mongoose } = require("mongoose");
const {getProductsController}=require("../controllers/getProductsController.js")
const {postProductsController}=require("../controllers/postProductsController.js")
const express=require("express");

//exports.productRouter=express.Router();
const productRouter=express.Router();

productRouter.get("/",getProductsController);
productRouter.post("/",validateCreateProuctDto,postProductsController);

module.exports={
    productRouter,
}


