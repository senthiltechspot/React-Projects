import React, { useRef } from "react";
 
function UncontrolledComponent(){
 
    const nameRef = useRef();
    const emailRef = useRef();
 
    function onSubmitHandler(){
        alert(`Name is ${nameRef.current.value} and email is ${emailRef.current.value}`)
    }
 
    return(
        <form onSubmit={() => onSubmitHandler()}>
            <input type="text" name="name" ref={nameRef} />
            <input type="email" name="email" ref={emailRef} />
 
            <input type="submit" value="Submit" />
        </form>
    )
}
 
export default UncontrolledComponent