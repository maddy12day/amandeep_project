import axios from 'axios';

const url = process.env.REACT_APP_API_BASE_URL 

export default axios.create({
    baseURL: url
})

export const handleApi = async(promise) => {
    return promise.then((result) => result.data )
    .catch((err) => Promise.resolve(err.response.data))
} 
