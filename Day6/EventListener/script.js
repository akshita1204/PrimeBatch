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


   //event listener to change the color of the card (individually)
   newCard.addEventListener("click",()=>
  {
     newCard.style.backgroundColor=getRandomColor();
  })
   
   newCard.className="card"   //giving class name to the newcard

   newCard.innerHTML=`
   <h4 class='text'>${ele.name}</h4>
   <h6 class='text'>${ele.email}</h6>
   <p class='text'>${ele.city}</p>
   `;

   root.appendChild(newCard)
})



const handleBgChange=()=>
{
  
  //logic to change the color background color of the page
  const bodyEle=document.querySelector('body');
  bodyEle.style.backgroundColor=getRandomColor();
  console.log("Change Color")
}



//function to get the random background color for the page
const getRandomColor=()=>
{
    const randomR=Math.floor(Math.random()*255);
    const randomG=Math.floor(Math.random()*255);
    const randomB=Math.floor(Math.random()*255);

    return `rgb(${randomR},${randomG},${randomB})`;
}





//event listener to change the color of the text
const textElements=document.querySelector('.text');
textElements.addEventListener("click",()=>
{
  textElements.style.backgroundColor=getRandomColor();
})



//to each the text color of all the texts
const textElementsall = document.querySelectorAll('.text'); // Select all elements with class 'text'
textElementsall.forEach(function(ele) {
  ele.addEventListener("click", () => { 
    ele.style.backgroundColor = getRandomColor();  // Apply color to each individual element (ele)
  })
});


//when we change the color of the paragrpah and doesnot want to change the color of the card
const textElementsall2 = document.querySelectorAll('.text'); // Select all elements with class 'text'
textElementsall2.forEach(function(ele) {
  ele.addEventListener("click", (e) => { 
    e.stopPropagation();   // Prevent event bubbling to parent (card)
    ele.style.backgroundColor = getRandomColor();  // Apply color to each individual element (ele)
  })
});

 

