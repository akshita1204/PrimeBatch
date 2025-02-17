
//how to accessa a value
const obj={
    name:"a",
    section:'A',
    city:"delhi"
};
console.log(obj.name)

//how to add a value
obj.country="India";
console.log(obj);

//print through prompt
const key=prompt("Enter the key");
console.log(obj[key])


//update a value
obj.city="Noida";
console.log(obj.city)

