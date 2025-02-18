const arr=[10,20,30]
arr.reduce((acc,ele,idx,c)=>
    {
        console.log(acc)   //default value 
        console.log(ele)
        console.log(idx)
        console.log(c)
    })

//if we pass a value
arr.reduce((acc,ele,idx,c)=>
    {
        console.log(acc)   //default value 
        console.log(ele)
        console.log(idx)
        console.log(c)
        return ele+acc //if we will not return then undefined we be passes to the net iteration
    },0)


    //if we will give the value to the acc and use return acc then the first ele will be passes
    arr.reduce((acc,ele,idx,c)=>
        {
            console.log(acc)   //default value 
            console.log(ele)
            console.log(idx)
            console.log(c)
            return acc //if we will not return then undefined we be passes to the net iteration
        },)


//How to get the sum using the reduce func
const ans=arr.reduce((acc,ele)=>
    {
        return acc+ele;
    },0)
    console.log(ans)

//if we will not give the defult value
const ans2=arr.reduce((acc,ele)=>
    {
        return acc+ele;
    },)
    console.log(ans2)

//if use multiply
const ans3=arr.reduce((acc,ele)=>
    {
        return acc*ele;
    },)
console.log(ans3)


