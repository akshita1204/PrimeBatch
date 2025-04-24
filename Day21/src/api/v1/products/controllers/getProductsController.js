const express=require("express")
const {productModel}=require("../../../../models/product_schema.js")

const getProductsController=async (req,res)=>
    {
          const productList=await productModel.find();
           console.log("Request received");
            res.send({
            status:"success",
            message:"Work in done!",
            data:{
                products:productList,
            }
        });
    }
    module.exports={
getProductsController
    }