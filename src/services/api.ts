import axios from 'axios';
import { getToken } from './auth';
export const api = axios.create({
    baseURL: 'http://localhost:8082/'
})



api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers = {
            'Authorization': token,
        }
    }
    return config;
}, error => {
    Promise.reject(error)
}
);