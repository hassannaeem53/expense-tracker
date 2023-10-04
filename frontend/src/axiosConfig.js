import axios from 'axios';
// import config from 'config';
const axiosConfig = axios.create({
  baseURL: import.meta.env.backendUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosConfig;
