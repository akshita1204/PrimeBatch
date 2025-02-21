let data = [
  { id:'abcd1', name: 'ABC', city: 'Noida', email: 'abc@gmail.com' },
  { id:'defg2', name: 'DEF', city: 'Delhi', email: 'def@gmail.com' },
  { id:'hijk3', name: 'GHI', city: 'Mumbai', email: 'ghi@gmail.com' },
  // { name: 'JKL', city: 'Delhi', email: 'jkl@gmail.com' },
];

const root = document.getElementById("root");

const showcards = (newdata) => {
  root.innerHTML="";
  newdata.forEach((ele,idx) => {
    const card = document.createElement("div");
    card.classList.add('card'); // Add the card class here

    card.innerHTML = `
      <div>
        <h4>${ele.name}</h4>
        <h6>${ele.email}</h6>
        <p>${ele.city}</p>
        <button onClick="deletecard(event,'${ele.idx}')">Delete</button>
      </div>
    `;

    
    root.appendChild(card);
  });
};

//to remove the card
const deletecard=(e,eleid)=>
{
  //e.target.remove();
  e.target.parentElement.parentElement.remove(); //to remove the parent of the parent 

  //will create the error due to indexing
  // console.log(e, idx);
  // data.splice(idx,1);
  // showcards(data);

  const index=data.findIndex((ele)=> ele.id===eleid);
  data.splice(index,1);
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
