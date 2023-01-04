import "./App.css";
 
import { useRef, useEffect, useState } from "react";
import React from "react";
 
const useFetchData = (url) => {
  const [data, setData] = useState(null);
 
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
 
  return [data];
};
 
function App() {
  const [dogData] = useFetchData("https://dog.ceo/api/breeds/image/random");
  const [otherData] = useFetchData("https://api.zippopotam.us/us/33162");
 
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h1>Hi I am learning Custom Hooks</h1>
      {dogData ? <img src={dogData.message} height={200} width={200} /> : null}
      {otherData ? <h3>{otherData.country}</h3> : null}
    </div>
  );
}
 
export default App;
