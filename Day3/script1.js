// const tem=()=>{
//     if(true)
//     {
//         var username="Akshita";
//     }
//     console.log(username);
// }
// tem(); //accessible
// console.log(username) //means it does not have the global scope


const sum=(a,b)=>
{
    const ans=(a+b)%10;
    const ele=(c)=>
    {
        console.log(c);
    }
    ele(ans)
}
sum(10,21)

