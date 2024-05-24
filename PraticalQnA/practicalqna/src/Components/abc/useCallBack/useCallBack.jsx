import { useCallback, useState } from "react";
import React from 'react';
import ChildComponent from "./child1";

export default function UseCallBack() {
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  },[]);
  return (
    <>
      <p>Count:{count}</p>
      <ChildComponent increment={handleIncrement} />
    </>
  );
}

// React.memo(function ChildComponent({increment}){
//   console.log("this is child component");
//   return (
//       <>
//       <button onClick={increment}>Increment Count</button>
//       </>
//   )
// })