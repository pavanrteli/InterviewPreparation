import { useEffect, useState } from "react";
export default function LifeCycleMethodFC(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("executes once");
        return ()=> console.log("cleanup tasks");
    },[count])
    return (
        <>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}
