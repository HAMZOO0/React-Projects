import React, { useEffect, useState } from "react";


export default function Github()
{
    const [data,setdata]= useState([])

    useEffect( () => {
       fetch("https://api.github.com/users/HAMZOO0").then((res)=>res.json()).then((res)=>setdata(res))
    
    },[])
     return (
        <div className="text-center m-4  bg-slate-400  text-white  p-4  text-3xl">
            Github Followers : {data.followers}
            <div className="m-2   p-2  flex justify-center"><img src={data.avatar_url} alt="" /></div>
        </div>
     )
}