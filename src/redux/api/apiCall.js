import axios from 'axios';

const apiCall = (url, method, params = null, data = null, headers = null) => axios({
  method,
  params,
  url,
  data,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json', ...headers },
});

export default apiCall;
