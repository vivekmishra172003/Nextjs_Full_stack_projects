"use client"

import axios from "axios";
import { useState } from "react";

export default function Signup() {
    const [username,setUsername] = useState<String>("");
    const [password,setPassword] = useState<String>("");
    return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
        <div className="border rounded pb-4 p-4">
            <input
            onChange={(e)=>{
                setUsername(e.target.value);
            }}
            className="p-2 m-2"
            type="text"
            name=""
            id=""
            placeholder="name"
            />
            <br />
            <input
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            className="p-2 m-2"
            type="password"
            name=""
            id=""
            placeholder="password"
            />
            <br />
            <div className="flex justify-center">
            <button className="mt-4" 
            onClick={()=>{
                axios.post("http://localhost:3000/api/user/",{
                    username,
                    password
                })
            }}
            >submit</button>
            </div>
        </div>
        </div>
    </div>
    );
}
