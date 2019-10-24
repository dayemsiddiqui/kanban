import axios from 'axios';
import { environment } from '../config';

function errorResponseHandler(error: any) {
  // check for errorHandle config
  if (
    error.config.hasOwnProperty('errorHandle') &&
    error.config.errorHandle === false
  ) {
    return Promise.reject(error);
  }

  // if has response show the error
  if (error.response) {
    console.log('An error occured', error.response.data.message);
  }
}

const apiInstance = axios.create({
  baseURL: environment.API_URL
});

apiInstance.interceptors.response.use(
  response => response,
  errorResponseHandler
);

export default apiInstance;
