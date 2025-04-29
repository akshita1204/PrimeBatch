const express=require("express")
const {productModel}=require("../../../../models/product_schema.js")

const getProductsController=async (req,res)=>
    {
        const {page=1,limit=6}=req.query;

          let mongoosequery=productModel.find();

          mongoosequery=mongoosequery.where('title').regex(/Apple/i); //to search and match, i is for case sensitive

          mongoosequery=mongoosequery.sort("_id")
          mongoosequery=mongoosequery.skip((page-1)*limit)
          mongoosequery=mongoosequery.limit(limit)

          const productList=await mongoosequery;
          const totalproducts=await  productModel.countDocuments();
          
           console.log("Request received");
            res.send({
            status:"success",
            message:"Work is done!",
            data:{
                products:productList,
                page,
                limit,
                total:totalproducts,
            }
        });
    }
    module.exports={
getProductsController
    }