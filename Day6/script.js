const data=[
    {name:'ABC', city:'Noida',email:'abc@gmail.com'},
    {name:'DEF',city:'Delhi',email:'def@gmail.com'},
    {name:'GHI',city:'Noida',email:'ghi@gmail.com'},
    {name:'JKL',city:'Delhi',email:'jkl@gmail.com'},
]

const root=document.getElementById('parent');  //main div (already created in html)
data.forEach((ele)=>
{
   const newCard=document.createElement('div');  //card div (creating a new div inside the parent div)
   
   newCard.className="card"   //giving class name to the newcard

   newCard.innerHTML=`
   <h4>${ele.name}</h4>
   <h6>${ele.email}</h6>
   <p>${ele.city}</p>
   `;
   
   root.appendChild(newCard)
})