// /*
// document.children[0].children[1].children[0].style.color="red";
// document.children[0].children[1].children[1].children[0].style.backgroundColor="green"
// document.children[0].children[1].children[1].children[1].style.backgroundColor="yellow"
// document.children[0].children[1].children[1].children[2].style.backgroundColor="blue";
//  */


// //For the outer Div
// /*
// const outerDiv=document.querySelector("div")
// outerDiv.style.backgroundColor="blue"
// */



// //inner div background yellow
// /*
// const outerDiv=document.querySelector("div")
// const divchildren=Array.from(outerDiv.children)
// divchildren.forEach((ele)=>
// {
//     ele.style.backgroundColor="red";
// })


// */


// //using the query selector
// const outerDiv=document.querySelectorAll("div div")
// console.log(outerDiv)
// outerDiv.forEach((ele)=>
// {
//     ele.style.backgroundColor="pink"
// })



//How to chage the content of the file
const mapping ={
    Invitation1:"You are invited for the event",
    Invitation2:"You are reminded for the task",
    Invitation3:"You have a notice from the college"
}

const innerDiv1=document.querySelectorAll("div > div")
innerDiv1.forEach((ele)=>
{
   const heading=ele.querySelector("h4").innerText.trim();
   if(mapping[heading])
   {
    ele.querySelector("p").innerText=mapping[heading];
   }
})

//  //append appendChild remove removeChild
//  const newElement=document.createElement("div")
//  const rootElement=document.querySelector("body")
//  newElement.innerText="Hi from DOM!"
//  rootElement.appendChild(newElement);



// ////////////////////////////////
// console.log(Object.entries(mapping))
// Object.entries(mapping).forEach(()=>
// {
//     const newchilddiv=document.createElement("div");
//     newchilddiv.innerText="Hello"
//     newElement.appendChild(newchilddiv)
// })



// Object.entries(mapping).forEach(()=>
// {
//     const newchilddiv=document.createElement("div");
//     newchilddiv.innerText=`
//     <h4 style="color:orange">Hello</h4>
//     <p>Hi</p>`;
//     newElement.appendChild(newchilddiv)
// })




