import axios from 'axios';

const baseUrl = `https://restcountries.com/v3.1/all`

const countryService = {

    getCountrys: () => {
           return axios.get(`${baseUrl}`)
        }
    
}

export default countryService