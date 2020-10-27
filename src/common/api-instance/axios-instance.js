import axios from 'axios';
import * as AxiosLogger from 'axios-logger';

const instance = axios.create();

instance.interceptors.request.use(
  AxiosLogger.requestLogger,
  AxiosLogger.errorLogger
);
instance.interceptors.response.use(
  AxiosLogger.responseLogger,
  AxiosLogger.errorLogger
);

export default instance;
