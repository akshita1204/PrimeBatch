const fsPromises=require("fs/promises");
const saveObjInFile=async (obj)=>
{
   try
   {
    const olddata=await fsPromises.readFile("./data/json","utf-8")
    //datatype of the old file will be string which needs to be converte into the array
    const oldDataArr=JSON.parse(olddata);
    oldDataArr.push(obj);
    await fsPromises.writeFile('./data.json', JSON.stringify(oldDataArr));
   }
   catch(err){
     console.log("File handling error:",err)
   }
}
module.exports={
    saveObjInFile
}