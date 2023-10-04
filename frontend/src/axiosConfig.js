import axios from 'axios';
// import config from 'config';
const axiosConfig = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosConfig;
