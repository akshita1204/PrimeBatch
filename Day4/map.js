
//using the map function

// const arr=[10,20,30,40]
// const na=[]
// array.forEach((a)=> {
//     na.push(2*a)
// });



//this  code can be written as using map
const arr=[10,20,30,40]
const na=arr.map((a)=>
{
    return a*2;
})
console.log(na)

//for each cant return something but map functon can