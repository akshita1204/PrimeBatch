import { useState } from "react";

const App=()=>
{

  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  const[issubmit,setissubmit]=useState(false)
 
  const handleSubmit=()=>
  {
    //logic for validation 
    if(name.length < 2) 
    {
      alert("Invalid Name")
    }
    else 
    {
      setissubmit(true)
    }
  }


 return(
 <div>
  { issubmit==true ?   <section>
    <h2>Name: {name}</h2>
    <h4>Email: {email}</h4>
  </section>
   :  
    <section>
     <div>
      <label>Name</label>
      <input value={name} onChange={(e)=>setname(e.target.value)} placeholder="Type here.." ></input>
      </div>
       <div>
      <label>Email</label>
      <input value={email} onChange={(e)=>setemail(e.target.value)}placeholder="Type email here.."></input>
      </div>
    <button onClick={handleSubmit}>Submit</button>
  </section>
   }
 </div>
 )

}
export default App;