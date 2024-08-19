'use client'
import axios from "axios"
import { useEffect, useState } from "react"

export default function User(){
    const [data,setData] = useState({
        email:"",
        name:"",
    })
    useEffect(()=>{
        axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    })
return<>
<h1>Ram ram</h1>
</>
}  