import { useRef, useEffect, useState } from "react";
export default function UseRef() {
  const [name, setName] = useState("");
  const ref = useRef(null);
  console.log(ref);
  useEffect(() => {
    ref.current.focus();
    console.log(ref);
  }, []);
  return (
    <>
      <input
        ref={ref}
        name="name"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

// import { useRef, useState } from "react";
// export default function UseRef(){
//   const [count,setCount]=useState(1);
//   // const ref=useRef(1);
//   const handleClick=()=>{
//     setCount(count+1);
//     // ref=ref+1;
//     // console.log(ref);
//   }
//   return (
//     <>
//     <p>Count : {count}</p>
//     <button onClick={handleClick}>Increment</button>
//     </>
//   )
// }
