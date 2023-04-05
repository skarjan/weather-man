import axios from 'axios';

const baseUrl = `https://restcountries.com/v3.1/all`

const getCountrys = () => {
    const request = axios.get(baseUrl).then;
    return request.then((response) => {
        return response.data.results
    })
}

export default { getCountrys }