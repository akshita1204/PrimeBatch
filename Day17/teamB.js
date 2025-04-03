const sum=(...rest)=>
    {
        const ans=rest.reduce((acc,ele)=>
        {
              return acc+ele;
        },0)
        return ans;
    }
    module.exports=sum;