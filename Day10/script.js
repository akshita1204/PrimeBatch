const getdata=(text)=>
{
  const pr=fetch('https://dummyjson.com/recipes/search?q=Margherita')
  pr.then((res)=>
{
    const pr2=res.json();
    pr2.then((data)=>
    {
        showCards(data.recipes);
    });
});
}
const root=document.querySelector('div')
const showCards=(dataArr)=>
{
    
    dataArr.forEach((ele)=>
    { 

        const newDiv=document.createElement('cards-container');
        newDiv.className="card";
        newDiv.innerHTML=`
        <h4>${ele.name}</h4>
        <img src="${ele.image}" width="100px" height="100px"/>
        <p>${ele.cuisine}</p>
        `;
        root.appendChild(newDiv)
    })
   
    
}
let timeoutId=null;
const handleSearch=(e)=>
{
    if(timeoutId)
    {
        clearTimeout(timeoutId);
    }
    timeoutId=setTimeout(()=>
    {
        getdata(e.target.value)
    },1000);
}