let count=0;
const sum=(...rest)=>
    {
        const ans=rest.reduce((acc,ele)=>
        {
              count++;  //it will get print as 10 times as we have 10 ele in total in our function call in teamA
              console.log(count)
              return acc+ele;
        },0)
        return ans;
    }
    module.exports=sum;