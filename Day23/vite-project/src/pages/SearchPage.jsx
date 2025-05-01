
import { useState } from "react";
const SearchPage=()=>
{
    const [searchText,setSearchText]=useState("");

    const getData=async ()=>
    {
        const resp=await fetch("http://localhost:2200/api/v1/products",{
            method:"GET",
        });
        const data=await resp.json();
        console.log("data",data);
    }
    getData();
    return <div>
        <div>
            <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button>Search</button>
        </div>
        <div>
            <h1>Products</h1>
            <div></div>
        </div>
        </div>   
        
}

export {SearchPage};