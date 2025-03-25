const AppForm=()=>
{
  const name ="Akshita!";

  const handleChange=(e)=>
  {
      console.log(e.target.value);
      
  }
   return (
    <div>
      <p>Name</p>
      <input placeholder="Please Enter here..." onChange={handleChange}/>
      <h3>Hello {name}</h3>
    </div>
   )
}
export default AppForm;