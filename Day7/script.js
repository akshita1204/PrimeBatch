const data = [
  { name: 'ABC', city: 'Noida', email: 'abc@gmail.com' },
  { name: 'DEF', city: 'Delhi', email: 'def@gmail.com' },
  { name: 'GHI', city: 'Mumbai', email: 'ghi@gmail.com' },
  // { name: 'JKL', city: 'Delhi', email: 'jkl@gmail.com' },
];

const root = document.getElementById("root");

const showcards = (newdata) => {
  root.innerHTML="";
  newdata.forEach((ele) => {
    const card = document.createElement("div");
    card.classList.add('card'); // Add the card class here

    card.innerHTML = `
      <div>
        <h4>${ele.name}</h4>
        <h6>${ele.email}</h6>
        <p>${ele.city}</p>
        <button onClick="deletecard(event)">Delete</button>
      </div>
    `;

    root.appendChild(card);
  });
};

//to remove the card
const deletecard=(e)=>
{
  //e.target.remove();
  e.target.parentElement.parentElement.remove(); //to remove the parent of the parent 
}



const getcity=(e)=>
{
    const selectcity=e.target.value;
    //fliter=> yes (sel) 
    const newdata=data.filter((ele)=>
    {
      if(ele.city===selectcity) return true;
      return false;
    });
    console.log(newdata)
    showcards(newdata)
}


showcards(data);
