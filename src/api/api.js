import axios from 'axios'
const URL_API = 'http://localhost:3100/api/prompt'

export const makeRequest = async (message) => {
    const {data} = await axios.post(URL_API, {message})
    return data
}