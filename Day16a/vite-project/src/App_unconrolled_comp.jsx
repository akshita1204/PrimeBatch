import { useState } from "react";

const App=()=>
{

  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  const[issubmit,setissubmit]=useState(false)
 
  const handleSubmit=(e)=>
  {
    console.log(e)
    e.preventDefault();
    if(e.target.userName.value.length < 2)
    {
      alert("Invalid name")
    }
    
    setname(e.target.userName.value)
    setemail(e.target.userEmail.value)
    setissubmit(true)
  }


 return(
 <div>
  { issubmit==true ?   <section>
    <h2>Name: {name}</h2>
    <h4>Email: {email}</h4>
  </section>
   :  
    <form onSubmit={handleSubmit}>
     <div>
      <label>Name</label>
      <input name="userName"  placeholder="Type here.." ></input>
      </div>
       <div>
      <label>Email</label>
      <input name="userEmail"placeholder="Type email here.."></input>
      </div>
    <button >Submit</button>
  </form>
   }
 </div>
 )

}
export default App;