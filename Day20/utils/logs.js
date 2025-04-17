
const fsPromises=require("fs/promises");
/*
const saveLogs=async (obj)=>
{
     try
       {
        const olddata=await fsPromises.readFile("./data/json","utf-8")
        const oldDataArr=JSON.parse(olddata);
        oldDataArr.push(obj);
        await fsPromises.writeFile('./data.json', JSON.stringify(oldDataArr));
       }
       catch(err){
         console.log("File handling error:",err)
       }
}
*/
const saveLog=(str)=>
{
    fsPromises.writeFile("logs.txt",str);
}

const requestLog=async(req)=>
{
    const{method,url}=req;
    const date=new Date();
    saveLog(`${date}-${method}-${url}`);
}
module.exports=
{
    requestLog
}