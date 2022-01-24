import axios from 'axios'
const api = axios.create({
  baseURL: 'https://back-coin.herokuapp.com/'
});
  api.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
   
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default api