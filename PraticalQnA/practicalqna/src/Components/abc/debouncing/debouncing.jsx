import { useEffect, useState } from "react"

export default function Debouncing(){
    const [value,setValue]=useState('');
    useEffect(()=>{
        const timerId=setTimeout(()=>{
            console.log("api calls");  //api calls
        },500)
        return ()=>clearTimeout(timerId);
    },[value])
    return (
        <>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
        </>
    )
}