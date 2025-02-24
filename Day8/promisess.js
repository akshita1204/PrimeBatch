
const getdata=(e)=>
{
    const profile=e.target.value;
    const pr1=fetch(`https://api.github.com/users/${profile}`);
console.log(pr1)

pr1.then((a)=>
{
  console.log("A",a);
  const pr2=a.json(); 
  pr2.then((data)=>
  {
    console.log(data)
    showUI(data);  //calling the showUI
    //getdata();
  });
}).catch((b)=>
{
    console.log("B",b);
});
}

getdata();

function showUI(data)
{
   console.log("data",data);
   const {avatar_url,login,html_url}=data;
   const root=document.getElementById("card");
   const newcard=document.createElement("div")
   newcard.id="cards"
   card.innerHTML= `
   <h4>${login.toUpperCase()}</h4>
   <img src='${avatar_url}' alt='avatar'>
   <a href=${html_url}>View Profile</a>
   `;

   storeData(data);
}

function storeData(data)
{
    const olddata=localStorage.getItem('searches');
    const arr=JSON.parse[olddata || "[]"];
    arr.push(data)
    localStorage.setItem("searches",JSON.stringify(arr)); //key value
}

function showHistory()
{
    const olddata=localStorage.getItem('searches');
    const arr=JSON.parse[olddata || "[]"];
    arr.forEach((data)=>
    {
        showUI(data);
    })
}
showHistory();




//Destructring of Obejst  in JS 