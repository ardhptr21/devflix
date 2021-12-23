import axios from 'axios';

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export default instance;
