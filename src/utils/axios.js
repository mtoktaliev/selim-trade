import axios from "axios";

const instance = axios.create({
    baseURL: 'http://161.35.29.179:8085'
})

instance.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})

export default instance