import { createContext, useState } from "react";
import Child1 from "./child1";
export const dataContext = createContext(0);
export default function Parent() {
  const [count, setCount] = useState(0);
  return (
    <dataContext.Provider value={count}>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Count
      </button>
      <Child1 />
    </dataContext.Provider>
  );
}
