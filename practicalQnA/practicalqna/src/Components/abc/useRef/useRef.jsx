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
