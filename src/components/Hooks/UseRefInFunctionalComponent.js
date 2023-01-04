import React, { useEffect, useRef } from "react";
 
function UseRefInFunctionalComponent(){
    const inputRef = useRef();
 
    useEffect(() => {
        inputRef.current.focus()
    }, [])
 
    return(
        <div>
            <input type="text" ref={inputRef}/>      
        </div>
    )
}
 
export default UseRefInFunctionalComponent
