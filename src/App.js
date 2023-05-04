import './App.css';
import countryService from './services/countryService.js'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Countries({ countries }) {
  return (
    <>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            {country.name.common}
          </li>
        ))}
      </ul>
    </>
  )
}

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState([])
  
  useEffect(() => {
    const baseUrl = `https://restcountries.com/v3.1/all`
    axios.get(`${baseUrl}`).then((response) => {
      const newCountries = response.data
      setCountries(newCountries)
    })
  }, []);

 const handleFilterChange = (event) => {
   setFilter(event.target.value)
   console.log(filter)
 }

  return (
    <div>  
      <input value={filter} onChange={handleFilterChange}/>
      <Countries countries={countries} />
    </div>
  );
}

export default App;
