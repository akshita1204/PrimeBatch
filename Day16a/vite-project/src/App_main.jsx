import { useState } from "react";

const App=()=>
{

  const[userDetails,setuserDetails]=useState({
    name:"Akshita",
    email:"a@gmail.com",
    phonenumber:"88",
  })
  const[issubmit,setissubmit]=useState(false)
 
  const handleSubmit=()=>
  {
    if(userDetails.name.length < 2)
    {
      alert("Invalid Name")
    }
    else
    {
      setissubmit(true)
    }

  }
  console.log(userDetails)

 return(
 <div>
  { issubmit==true ?  (
     <section>
     {
       Object.entries(userDetails).map(([key,val])=>
      {
        return(
          <h3 key={key}>
            {key}:{val}
          </h3>
        )
      })
     }
   </section>
  )
   :  
    <section>
     <div>
      <label>Name</label>
      <input placeholder="Type here.." 
      value={userDetails.name}
      onChange={(e)=>{
        const val=e.target.value;
        const newItem=userDetails;
        newItem.name=val;
        setuserDetails({...newItem})
  
      }}>
      </input>
      </div>
       <div>
      <label>Email</label>
      <input name="userEmail"placeholder="Type email here.."
      value={userDetails.email}
       onChange={(e)=>{
        const val=e.target.value;
        const newItem=userDetails;
        newItem.email=val;
        setuserDetails({...newItem})
      }
    }
      ></input>
      </div>
      <div>
      <label>Phone Number</label>
      <input name="phonenNumber"placeholder="Type phoneNumber here.."
      value={userDetails.phonenumber}
       onChange={(e)=>{
        const val=e.target.value;
        const newItem=userDetails;
        newItem.phonenumber=val;
        setuserDetails({...newItem})
      }
    }
      ></input>
      </div>
    <button onClick={handleSubmit}>Submit</button>
  </section>
   }
 </div>
 )

}
export default App;