const express=require("express")
const {productModel}=require("../../../../models/product_schema.js")

const getProductsController=async (req,res)=>
    {
        const {page=1,limit=6,q=""}=req.query;

          let mongoosequery=productModel.find();

          const regexMatch=new RegExp( q,"i");
          mongoosequery=mongoosequery.where('title').regex(regexMatch); //to search and match, i is for case insensitive and g for case sesitive, 
          // (Apple/i) this can be used inside regex() 

          const queryClone=mongoosequery.clone(); //so that we dont need to write the same code and a query dont need to br written many times 
          const totalproducts=await  productModel.countDocuments();


          mongoosequery=mongoosequery.sort("_id")
          mongoosequery=mongoosequery.skip((page-1)*limit)
          mongoosequery=mongoosequery.limit(limit)


          const productList=await mongoosequery;

        await new Promise((resolve,reject)=>
        {
            setTimeout(()=>{
                resolve();
            },5000)
        })
          
          
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