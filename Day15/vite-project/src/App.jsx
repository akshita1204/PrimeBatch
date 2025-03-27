import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../../components/Card";
const AppPage=()=>
{

  const [data,setdata]=useState({});
  // const getData=()=>
  // {
  //   const pr1=fetch("https://dummyjson.com/products");
  //   pr1.then((res)=>{
  //     console.log(res);
  //     const pr2=res.json();
  //     pr2.then((data)=>
  //     {
  //         console.log(data)
  //     })
  //   }).catch((err)=>{
  //     console.log(err);
  //   });

  // };

  // const getData=()=>
  // {
  //   const pr1=fetch("https://dummyjson.com/products");
  //   pr1.then((res)=>res.json())
  //   .catch((err)=>
  //   {
  //     console.log(err);
  //   }).then((data)=>
  //   {
  //     console.log(data)
  //   })
  // }

  console.log("before get data",data)
  const getData=async ()=>
  {
    try
    {
    const response=await fetch("https://dummyjson.com/products?limit=10&skip=0");
    const tem=await response.json();
    setdata(tem);
    }
    catch(err)
    {
      console.log(err.message);
    }
    finally{
      console.log("Completed Successfully");
    }

  }


  

  useEffect(()=>{getData()},[]);
 //[] it will only run the sideeffect ones 

  console.log("after get data",data)
  const totalPages=Math.ceil(data.total/data.limit)
  const pages=[];
  for(let i=0;i<totalPages;i++)
  {
    pages.push(i+1);
  }

  return (
    
    <React.Fragment>
      <h1>Hello!</h1>
      <p>Something...</p>
      <hr></hr>
      <h4>{data.products?.[0].tilte}</h4>
      {/* optional chaining */}
      {data.products?.map((elem)=>
      {
        return <Card title={elem.title} price={elem.price} thumbnail={elem.thumbnail}/>
      })}

      <select>
        {
           pages.map((pagenumber)=>
          {
            return <option>{pagenumber}</option>
          })
        }
      </select>

    </React.Fragment>
    
  )
}
export default AppPage;