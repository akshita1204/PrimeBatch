let data = [
    { name: 'ABC', city: 'Noida', email: 'abc@gmail.com' },
    { name: 'DEF', city: 'Delhi', email: 'def@gmail.com' },
    { name: 'GHI', city: 'Mumbai', email: 'ghi@gmail.com' },
];


const handleformsubmit = (e) => {
    e.preventDefault(); //default behaviour of form can be prevenrted
    console.log(e)
    console.log(e.target.email.value)

    const obj = {
        name: e.target.fullname.value,
        email: e.target.email.value,
        city: e.target.city.value
    }

    //email validation
    const isemailexists = data.some((ele) => {
    return e.email === e.target.email.value;
     });
     

    if (isemailexists) {
        alert("Already exists");
        return;
    }
    data.push(obj)
    console.log(data)
}