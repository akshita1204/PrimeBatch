

const express=require("express");

//exports.productRouter=express.Router();
const productRouter=express.Router();

productRouter.get("/",(req,res)=>
{
    console.log("Request received");
    res.json({
        status:"fail",
        message:"Work in progress!",
    });
});

module.exports={
    productRouter,
}

