import { useState } from "react"

export default function StateLifting(){
    const [count,setCount]=useState(0);
    const handleIncrement=()=>{
        setCount((prevCount)=>prevCount+1);
    }
    return (
        <>
        <p>Count : {count}</p>
        <Child1Component handleIncrement={handleIncrement}/>
        <Child2Component count={count}/>
        </>
    )
}
function Child2Component({count}){
    return (
        <>
        <p>Child2: {count}</p>
        </>
    )
}
function Child1Component({handleIncrement}){
    return(
        <>
        <button onClick={handleIncrement}>Increment</button>
        </>
    )
}