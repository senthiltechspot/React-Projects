import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function FetchDataFromAPI(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((Data) => setData(Data.results));
  }, [url]);
  return data;
}


// console.log(randColor());
const Collection = () => {
  const result = FetchDataFromAPI(
    "https://pokeapi.co/api/v2/pokemon/?limit=100"
  );
  const navigate = useNavigate();

  function NavigateToPoke(name) {
    navigate(`/Card/${name}`);
  }
  const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
  }
 
  return (
    <div className="d-flex flex-wrap justify-content-evenly gap-3">
      {result.map((e, i) => (
        // <p>{e.name}</p>
        <div key={i}>
          {/* <button
            onClick={() => {
              NavigateToPoke(e.name);
            }}
          >
            {e.name}
          </button> */}
          <div key={i} className="card" style={{width: "18rem",backgroundColor: randColor()}}>
            <div className="card-body">
              <h5 className="card-title"> {e.name.toUpperCase()}</h5>
              <button
                className="btn btn-primary"
                onClick={() => {
                  NavigateToPoke(e.name);
                }}
              >
                For More Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collection;
