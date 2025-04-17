
const {ulid}=require("ulid")
const fsPromises=require("fs/promises")



const saveProductsArray=(arr)=>
{
   fsPromises.writeFile(
    "./data.json",
    JSON.stringify(arr)
   );
}

const getProductsArray=async ()=>
{
    const str=await fsPromises.readFile("./data.json");
    const arr=JSON.parse(str);
    return arr;
}

const saveDataindb=async(obj)=>
    {
       obj.id=ulid();  //to add a unique id 
       const oldArray=await getProductsArray();
       oldArray.push(obj);
       saveProductsArray([obj])
    };
module.exports=
{
    saveDataindb
};