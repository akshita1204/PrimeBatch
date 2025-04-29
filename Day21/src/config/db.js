
const mongoose=require("mongoose")
const fs=require('fs');
const data=fs.readFileSync('.env');
mongoose.connect(process.env.MONGO_DB_URL,{dbName:"PrimeBatch"}).then(()=>
{
console.log(data.toString())
}).catch((err)=>
{
    console.log("Connection Error");
    console.log(err.message)
})