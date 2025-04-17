const http=require("http");

const { saveObjInFile } = require("./fileHelper");
const server=http.createServer((req,res)=>
{ 
    const {url,method}=req;
    console.log(":url:", url);
    const [path,queryStr]=url.split("?");
    if(path==="/products" && method==="POST")
    {
        //console.log("queryStr:",queryStr);
        const queryItems=queryStr.split("&");
        console.log("queryItems", queryItems);
        const queryKeyVals=queryItems.map((str)=>str.split("="));
       // console.log("querykeyVals",queryKeyVals);
        const obj=Object.fromEntries(queryKeyVals);
       // console.log(obj);
        //fsPromises.writeFile('./data.json',JSON.stringify([obj]))
        saveObjInFile(obj);
        
        res.end(
            JSON.stringify({
                status:"success",
                message:"Product added",
            })
        )
    }
});

server.listen(2100,()=>
{
    console.log("server is running on the port 2100")
})
