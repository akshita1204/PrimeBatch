

const express=require("express");
const PORT=2100;
const app=express();
const {requestLog}=require("./utils/logs")

app.get("/",(req,res)=>
{
  console.log(req.url,req.method)
  requestLog(req);
  res.json(
    {
        status:"success",
        message:`Server is running on ${PORT}`
    }
  )
});

app.post('/products',(req,res)=>
{
    console.log(req.url,req.method)
    res.json(
        {
            status:"fail",
            message:"work in progress!"
        }
      )
});

app.listen(PORT,()=>
{
    console.log(`App is running on the ${PORT}`)
})
