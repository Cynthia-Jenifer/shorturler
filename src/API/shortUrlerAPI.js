import axios from 'axios';

const liveServerUrl = process.env.SERVER_URL;
const url = liveServerUrl || 'http://localhost:3000';

const shortUrlerAPI = axios.create({
    baseURL: url
});

shortUrlerAPI.interceptors.request.use(
    async config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

export default shortUrlerAPI;
