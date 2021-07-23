import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CountryCard() {
  const [countries, setCountries] = useState([]);  
  
// Send a GET request with Axios
useEffect(() => {
  axios.get('https://restcountries.eu/rest/v2/all')
  .then(response => setCountries(response.data));
}, []);


return (
  <div className="card-container">
    {countries.map(country => {
      return <div className="country-card" key={country.name}>
        <h2>{country.name}</h2>
        <h4>{country.capital}</h4>
        <p>
          <img src={country.flag} width="100px" alt={country.name + " flag"} />
        </p>
      </div>
    })}
  </div>
);
};

export default CountryCard;