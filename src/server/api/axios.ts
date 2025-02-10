import axios from 'axios'

const businessApi = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

export {
    businessApi
}