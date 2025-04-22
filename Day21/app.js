

const express=require('express')
const morgan=require('morgan')
const PORT=2200;

const app=express();

//App Level middleware
// app.use((req,res,next)=>
// {
//     console.log('Hello');
// })
app.use(morgan("dev"));

app.listen(PORT,()=>
{
    console.log(`App is runnig on the ${PORT}`);
})