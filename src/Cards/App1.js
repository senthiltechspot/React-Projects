import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Login from "../components/Login";
import User from "../components/User";
import Home from "./Home";
function App1() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div className="d-flex justify-content-center align-self">
          <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">Login to see the Pokemons</h5>
              <Login />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <User />
          <Home />
        </div>
      )}
    </div>
  );
}

export default App1;
