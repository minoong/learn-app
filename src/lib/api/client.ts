import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
});

instance.interceptors.request.use(
  (config) => {
    console.log(1);
    console.log(1);
    console.log(2);
    console.log(12);
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('com.naver.nid.access_token')?.split('.')[13]}`,
    };
    console.log(1);
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default instance;
