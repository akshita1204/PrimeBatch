

const express=require("express");
const PORT=2100;
const app=express();
const {requestLog}=require("./utils/logs")
const {saveDataindb}=require("./db")

//When a client sends data in JSON format (like via fetch or Postman), this middleware parses that data and makes it available in req.body.
app.use(express.json()); //body parser


app.use((req,res,next)=>    //middleware
    {
       console.log(Object.keys(res))
        requestLog(req);
        next();
    })

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

app.post('/products',async (req,res)=>
{
    console.log(req.url,req.method)
    try
    {
        const data=req.body;
        await saveDataindb(data);
        res.json(
        {
            status:"success",
            message:"work in progress!"
        }
      )
    }
    catch(err)
    {
        console.log("/products",err.message);
        res.status(500);
        res.json(
            {
                status:"fail",
                message:"Something went wrong!"
            }
        )

    }
});

app.use((req,res,next)=>    //middleware
    {
        res.status(404);
        res.json({
            status:"fail",
            message:"You are trying to access a route which is not defined yet"
        })
        requestLog(req);
        next();
    })

app.listen(PORT,()=>
{
    console.log(`App is running on the ${PORT}`)
})
