import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="dev-toq28vtb31zpesns.us.auth0.com"
      clientId="VpTVeKgOl1avPfZh95gv1c8QyjQk5Mmy"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider> */}
    <Auth0Provider
       domain="dev-toq28vtb31zpesns.us.auth0.com"
       clientId="5w5nmMhF2OM4veIcoXG2j0hjwWLgiMre"
       redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
