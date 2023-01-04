import React, {useRef, useState} from 'react';
 
function Test(){
    const count = useRef(0);
 
    const handleClick = () => {
        //Updating the value of this state, but not causing a re-render
        count.current = count.current + 1;
        console.log("The count value is " + count.current)
    }
 
    return(<><button onClick={handleClick}>Increment</button>
    <p>Increment value is: {count.current}</p></>)
}
