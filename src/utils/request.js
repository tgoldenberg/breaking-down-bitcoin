import axios from 'axios';

const request = axios.create({
  validateStatus: (status) => true,
  responseType: 'json',
  timeout: 10000,
});

export default request;
