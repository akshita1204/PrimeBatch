console.log("start")

const handleInnerCall=()=>
{
    console.log("Step Y");
}

const handleCall=()=>
{
    console.log("Step M");
    handleInnerCall();
    console.log("Step N")
};
//handleCall();

setTimeout(handleCall,10000); //time in milliseconds
console.log("end");
//setTimeOut =>partiuclar time baad kaam karna 
//setTimeInterval=> particualar time interval par task karna 

/*
setTimeout(handleCall,0); 

O/P=>
start
end
Step M
Step Y
Step N

because the event loop will check for is their something pending=>yes and is the call stack empty=> no so handlecall will execute later .
So its impossible that a asynchronous func will be called before a synchrounous func

*/

console.log("A")

const handle=()=>
{
    console.log("H")
};

setTimeout(()=>
{
   console.log("N");
   setTimeout(() => {
      console.log("P")
   }, 0);
   handle();
   console.log("B")
},5000)

console.log("C")


//inversion of control=> an issue with callback that they have to give their control to other functions.
//promise is an object which represents eventual completion(or faiure) of an asynchronous operations and its resulting value. They are handled by the browser.
