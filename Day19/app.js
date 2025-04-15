const http=require("http");
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
        const queryKeyVals=queryStr.map((str)=>split("="));
        console.log("querykeyVals",queryKeyVals);
        
    }
 
});
server.listen(2100,()=>
{
    console.log("server is running on the port 2100")
})