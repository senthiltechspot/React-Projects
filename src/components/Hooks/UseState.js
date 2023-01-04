import React, { useState } from "react";
 
function CounterFunctionApp(){
    const [count, setCount] = useState(0);
 
    function increaseCount(){
        setCount(count + 1)
    }
 
    function decreaseCount(){
        setCount(count - 1)
    }
 
    return(
        <div>
            <button onClick={() => increaseCount()}>+</button>
            <p>{count}</p>
            <button onClick={() => decreaseCount()}>-</button>
        </div>
    )
}
 
export default CounterFunctionApp
