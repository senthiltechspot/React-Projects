import React, { useContext } from "react";
import { EmpContext } from "../App";
 
function Salary(){
let context = useContext(EmpContext)
 
    return(<div>
        <h2>Welcome to salary component</h2>
        <p>Employee Id: {context.Id}</p>
        <p>Employee salary: {context.Salary}</p>
    </div>)
}
 
export default Salary
