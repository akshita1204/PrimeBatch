
// import { useState } from "react";
// const AppForm=()=>
// {
//  // const name ="Akshita!";
//   const [monitor,remote]=useState("Akshita");

//   console.log("re-rendered",monitor)  
//   const handleChange=(e)=>
//   {
//    setTimeout(()=>
//   {
//     console.log(e);
//     remote(e.target.value + e.nativeevent.data); 
    
//   },2000);
//   console.log("Updated",monitor)   //this monitor will contain the default value here
//   }
//    return (
//    <div>
//      <div>
//       <p>Name</p>
//       <input value={monitor} placeholder="Please Enter here..." onChange={handleChange}/>
//       {/* value={monitor} => jisse inoutbox me bhi upper me aaye */}
//       <h3>Hello {monitor} !</h3>   
//       {/* this will contain the updated value */}
//     </div>

//     <div>
//       <h1>Your name </h1>
//     </div>
//    </div>

//    )
// }
// export default AppForm;

import { useState } from "react";
const AppForm=()=>
  { 
      const [flag,setflag]=useState(true);
      const[username,setusername]=useState();

      const handleClick=()=>
      {
         setflag(false);
      }
      const handleChange=(e)=>
        {
           setusername(e.target.value);
        }
    //   if(flag==true)
    //   {
    //      return (
    //       <section>
    //         <div style={{display:"flex"}}>Hello</div>
    //         <button onClick={handleClick}>Submit</button>
    //       </section>
    //      )
    //   }
    //  else
    //  {
    //   return (
    //     <section>
    //     <div style={{display:"flex"}}>Hi</div>
    //   </section>
    //   )
    //  }
    return (
      <section>
       { flag===true ? 
       
       <div style={{display:"flex"}}>
        <p>Hello</p>
        <input onChange={handleChange}></input>
       <button onClick={handleClick}>Submit</button>
       </div>
           
        :
        <div style={{display:"flex"}}>
          <p>Hey {username}!</p>
        </div>
        }
      </section>
    )
  }


  export default AppForm;
