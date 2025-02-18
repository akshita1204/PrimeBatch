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
        return ele+acc //if we will not return then udefined we be passes to the net iteration
    },0)