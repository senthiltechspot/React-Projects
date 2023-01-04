import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CardDetails = () => {
  const params = useParams();
  console.log(params.pokename);
  const url = `https://pokeapi.co/api/v2/pokemon/${params.pokename}`;

  const [fetchedData, setFetchedData] = useState(null);
  
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(url);
      console.log("axios Triggered");
      setFetchedData(data);
    };

    console.log("useEffect Triggered");
    getData();
  }, [url]);
  console.log("Data",fetchedData);

  return (
    <div>
      <p>Hello to Card</p>
      <h1>{params.pokename}</h1>
      <h1>
        Abilities :
        {fetchedData &&
          fetchedData.abilities.map((e,i) => (
            <div key={i}>
              <li >{e.ability.name}</li>
      
            </div>
          ))  
          }
      </h1>
      <h1>{fetchedData&& <div>
<h1>Total moves Available is {fetchedData.moves.length}</h1>
          </div>}</h1>
      {/* <h1>
        Moves:
      {fetchedData &&
          fetchedData.map((e,i) => (
            <div key={i}>
              <p >{e.moves}</p>

            </div>
          ))
          }
      </h1> */}
    </div>
  );
};

export default CardDetails;
