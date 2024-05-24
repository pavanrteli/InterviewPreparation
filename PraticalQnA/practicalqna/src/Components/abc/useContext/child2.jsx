import { useContext } from "react";
import { dataContext } from "./useContext";

export default function Child2() {
  const count=useContext(dataContext);
  return (
    <>
      <p>this is child2 : {count}</p>
    </>
  );
}
