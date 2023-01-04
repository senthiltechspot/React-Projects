import React, { useEffect, useState } from "react";
function FetchDataFromAPI(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((Data) => setData(Data.drinks));
  }, [url]);
  return data;
}
const APIMargaritaUsingCustomHook = () => {
  // Calling Data From Custom Hooks
  const drinks = FetchDataFromAPI(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita%"
  );
  // console.log(drinks);
  return (
    <div>
      <h1>API Margarita</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Instructions</th>
          </tr>
        </thead>
        <tbody>
          {drinks.map((item) => (
            <tr key={item.idDrink}>
              <td>{item.strDrink}</td>
              <td>{item.strInstructions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default APIMargaritaUsingCustomHook;
