import axios from 'axios';

const api = axios.create({
  baseURL: 'http://67.207.87.192:3335',
});

export default api;
