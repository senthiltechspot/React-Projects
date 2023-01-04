import './App.css';
import Employee from './components/Employee';
import ReactDOM from "react-dom";
import { React, useState, createContext } from 'react';
 
export const EmpContext = createContext()
 
function App() {
  const [emp, setEmp] = useState({Id: "123", Name: "Jeevendra", Salary: "60 LPA"})
  return (
    <div>
      <h2>Welcome to App component</h2>
      <EmpContext.Provider value={emp}>
        <Employee />
      </EmpContext.Provider>
    </div>
  );
}
 
export default App;
