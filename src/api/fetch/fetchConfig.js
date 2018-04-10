import axios from 'axios';

axios.get()
const axiosService = axios.create();

axiosService.defaults.timeout = 5000;


axiosService.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const err = error.response;
        if (err.status === 401) {
            window.location = '/';
        }
        return Promise.reject(error);
    }
);

export default axiosService;