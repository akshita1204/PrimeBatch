//Elimation of the etra variable
// const sum=(a,b,c)=>
// {
//     const ans=a+b;
//     return ans;
    
// }

// const Print=(txt)=>
// {
//     console.log("_____________")
//     console.log(txt);
//     console.log("_______________")
// }

// Print(sum(10,20))

//callback=> when you pass a function as a parameter (function invocation)
const sum=(a,b,c)=>
    {
        const ans=a+b;
        //return ans;
        c(ans)
        
    }
    
    const Print=(txt)=>
    {
        console.log("_____________")
        console.log(txt);
        console.log("_______________")
    }
    
    sum(10,20,Print)