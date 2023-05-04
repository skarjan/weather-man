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

  useEffect(() => {
    const baseUrl = `https://restcountries.com/v3.1/all`
    axios.get(`${baseUrl}`).then((response) => {
      const newCountries = response.data
      setCountries(newCountries)
    })
  }, []);



  return (
    <div>  
      <Countries countries={countries} />
    </div>
  );
}

export default App;
