// 'use client'
import axios from "axios"
import { useEffect, useState } from "react"
async function fetch() {
    await new Promise(r=>setTimeout(r,5000))
    return (await axios.get("http://localhost:3000/api/user")).data
}

export default async  function User(){
    // const [data,setData] = useState({
    //     email:"",
    //     name:"",
    // })
    // useEffect(()=>{
    //     axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    //     .then((response)=>{setData(response.data)})
    // })
    const data = await fetch();
return<>
<h1>Ram ram</h1>
<div>{data.email}</div>
</>
}  