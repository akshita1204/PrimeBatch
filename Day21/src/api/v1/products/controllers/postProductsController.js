const express = require("express")
const { productModel } = require("../../../../models/product_schema.js")

const postProductsController = async (req, res) => {
try{
    const obj=req.body;
    const newProduct = await productModel.create(obj);
    res.status(201);
    res.json({
        status: "success",
        message: "Work in done!",
        data: {
            product: newProduct,
        }
    });
}
catch(err)
{
    res.status(500)
}
}
module.exports = {
    postProductsController
}

//to post