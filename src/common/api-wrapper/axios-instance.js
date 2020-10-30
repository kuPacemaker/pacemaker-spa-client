import axios from 'axios';
import * as AxiosLogger from 'axios-logger';

const instance = axios.create();

instance.interceptors.request.use((request) => {
  console.log(request.data);
  return AxiosLogger.requestLogger(request);
}, AxiosLogger.errorLogger);
instance.interceptors.response.use((response) => {
  console.log(response.data);
  return AxiosLogger.responseLogger(response);
}, AxiosLogger.errorLogger);

export default instance;
