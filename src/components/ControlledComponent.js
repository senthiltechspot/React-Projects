import React, { useState } from "react";
 
function ControlledComponent(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
 
    function onSubmitHandler(){
        alert(`Name is ${name} and email is ${email}`)
    }
 
    return(
        <form onSubmit={() => onSubmitHandler()}>
            <input type="text" name="name" value={name} onChange = {(event) => setName(event.target.value)}/>
            <input type="email" name="email" value={email} onChange = {(event) => setEmail(event.target.value)}/>
 
            <input type="submit" value="Submit" />
        </form>
    )
}
 
export default ControlledComponent
