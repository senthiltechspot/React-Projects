import React, { useContext } from "react";
import Salary from "./Salary";
import { EmpContext } from "../App";
 
function Employee(){
 
    let context = useContext(EmpContext);
 
    return(<div>
        <h2>Welcome to Employee component</h2>
        <p>Employee Id: {context.Id}</p>
        <p>Employee name: {context.Name}</p>
        <Salary />
    </div>)
}
 
export default Employee;
