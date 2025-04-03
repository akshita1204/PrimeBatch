import { useState,useEffect } from "react";
const Card=({name,email,githubLink})=>
{
    const [data,setdata]=useState({})
    const res=githubLink.split("/");
    const userId=res[3];

    const getdata=async()=>
    {
        const resp=await fetch(`https://api.github.com/users/${userId}`);
        const tem=await resp.json();
        setdata(tem);
    }
    useEffect(()=>
    {
        getdata();
    },[]);

    return(
        <div>
            <h3>{name}</h3>
            <h4>{email}</h4>
            <a href={githubLink} target="_blank">View Profile</a>
            <img width="125" src={data.avatar_url} alt="profile photo" />
        </div>
    )
}
export default Card;