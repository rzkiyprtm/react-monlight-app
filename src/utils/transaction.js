import axios from 'axios';

const config = (token, params) => {
  return {headers: {'x-access-token': token}, params: params ? params : ''};
};

const baseUrl = process.env.REACT_APP_BACKEND_HOST;

export const createTrans = (body, token) =>
  axios.post(baseUrl, body, config(token));

export const getHistory = (token, params) =>
  axios.get(`${baseUrl}/history`, config(token, params));