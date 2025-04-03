import P from "papaparse";
import { useState } from "react";
import Card from "./components/Card";

const App=()=>
{
  const[profiles,setprofiles]=useState([]);
  const handleFileUpload=(e)=>
  {
    const file=e.target.files[0];
    P.parse(file,{header:true, complete:handleData});
  }

  const handleData=(res)=>
  {
    const{data,errors}=res;
    if(errors.length>0)
    {
      alert("Error!")
    }
    else{
      setprofiles(data)
    }
  }

  return(
    <div>
      <div>
        <h1>Hello!</h1>
        <input type="file" accept=".csv" onChange={handleFileUpload}/>
      </div>
      <div>
        {
          profiles.map((ele)=>
          {
            return (<Card name={ele.name} email={ele.email} githubLink={ele.githubLink} />)
          })
        }
      </div>
    </div>
  )
}
export default App;