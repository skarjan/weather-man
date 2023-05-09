import './App.css';
import countryService from './services/countryService.js'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Countries({ countries, eventHandler, val }) {
  return (
    <>
      <input value={val} onChange={eventHandler} />
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
  const [filter, setFilter] = useState("")
  const [filterResults, setFilterResults] = useState([])
  useEffect(() => {
    const baseUrl = `https://restcountries.com/v3.1/all`
    axios.get(`${baseUrl}`).then((response) => {
      const newCountries = response.data
      setCountries(newCountries)
    })
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setFilterResults(
      countries.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
          ))
          console.log(filter.length > 0)
  }
if (filter.length < 0) {
  
  return (
    <>
      <Countries countries={countries} eventHandler={handleFilterChange} val={filter}/>
    </>
    
    );
  } else {
    return (
      <>
        <Countries countries={filterResults} eventHandler={handleFilterChange} val={filter}/>
      </>
      ); 
  }
}

export default App;
