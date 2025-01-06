import React, { useState } from "react";

const UseMemo=()=>{
    const [count , setCount] =useState(0);
return(
    <div>
        <h1>React.UseMemo</h1>
        <h2>My todos</h2>
        <p>New Todo</p>
        <button>Add Todo</button>
        <div>
            <span>Count:{count}<button onClick={()=>setCount(count+1)}>+</button></span>
        </div>
        <h1>Expensive Calculation</h1>
        <p>1000000000</p>
    </div>
)
}
export default UseMemo;