import './App.css';
import countryService from './services/countryService.js'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([])
  const baseUrl = `https://restcountries.com/v3.1/all`
  
  useEffect(() => { 
    axios.get(`${baseUrl}`).then((response)=>{
      const newCountries = response.data
      setCountries(newCountries)
      console.log(countries )
    })
  }, []);

  return (
    <div>


    </div>
  );
}

export default App;
