import { useMemo, useState } from "react"

const expensiveCalculation=(n)=>{
    console.log("expensive calculation")
    return n*2;
}
export default function UseMemo(){
    const [number1,setNumber1]=useState(1);
    const calculation=useMemo(()=> expensiveCalculation(number1),[number1]);
    const [number2,setNumber2]=useState(1);
    return (
        <>
        <p>number1: {number1}</p>
        <p>calculation: {calculation}</p>
        <p>number2: {number2}</p>
        <button onClick={()=>setNumber1(number1+1)}>updateNumber1</button>
        <button onClick={()=>setNumber2(number2+1)}>updateNumber2</button>
        </>
    )
}