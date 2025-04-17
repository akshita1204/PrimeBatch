

const express=require("express");
const PORT=2100;
const app=express();

app.get("/",(req,res)=>
{
  res.send("Hello!")
  //console.log()
});

app.listen(PORT,()=>
{
    console.log(`App is running on the ${PORT}`)
})
