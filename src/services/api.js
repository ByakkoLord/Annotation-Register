import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-register-notes.vercel.app'
})

export default api