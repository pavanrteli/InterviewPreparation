import React from "react";

export default React.memo(function ChildComponent({increment}){
    console.log("this is child component");
    return (
        <>
        <button onClick={increment}>Increment Count</button>
        </>
    )
})