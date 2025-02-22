//1.function declaration

// function print(a)
// {
//     console.log("Hello",a);
// }
// print("Akshita");
//we can use it before declartion of function and can repeat the name



//2.Function Assignment
// const view=function printtext(a)
// {
//     console.log("Hello",a);
// }
// view("Akshita")
// printtext("Akshita")



//3.Function Anonumous
// const view= function(a)
//     {
//         console.log("Hello",a);
//     }
//     view("Akshita")
//     printtext("Akshita")



// 4.Arrow Function
// const view=(a)=>
//     {
//         console.log("Hello",a);
//     }
//     view("Akshita")
//     printtext("Akshita")
//we have removed the name of the function and function keyword in this type 


//make the function which performs addition 

//Type 1
// function sum(a,b)
// {
//     return (a+b)%10;
// }
// console.log(sum(10,21));


//Type 2
// const ans=function sum(a,b)
// {
//     return (a+b)%10;
// }
// console.log(ans(10,21));


//Type 3
// const ans=  (a,b)=>
// {
//     return (a+b)%10;
// }
// console.log(ans(10,21));



//Type 4 
// const sum=(a,b)=>
// {
//     console.log((a+b)%10);
// }
// sum(10,12)


//Type 4 another method
const sum=(a,b)=>(a+b)%10;
console.log(sum(10,12))

