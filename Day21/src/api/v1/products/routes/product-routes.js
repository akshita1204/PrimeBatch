
const { default: mongoose } = require("mongoose");
const {getProductsController}=require("../controllers/getProductsController.js")
const {postProductsController}=require("../controllers/postProductsController.js")

const express=require("express");
const validateCreateProductDto = require("../dto/validateCreateProuct.js");

//exports.productRouter=express.Router();
const productRouter=express.Router();

productRouter.get("/",getProductsController);
productRouter.post("/",validateCreateProductDto,postProductsController);

module.exports={
    productRouter,
}


