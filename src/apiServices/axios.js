import axios from 'axios'

// Replace by env
const BASE_URL = ""

export  default  axios.create({
    baseURL: BASE_URL
})


export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials:true
})