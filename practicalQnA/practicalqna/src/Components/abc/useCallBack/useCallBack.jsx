import { useCallback, useState } from "react";
import ChildComponent from "./child1";

// function ChildComponent({increment}){
//     return (
//         <>
//         <button onClick={increment}>Increment Count</button>
//         </>
//     )
// }

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
