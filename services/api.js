
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

const env = 'development';

// export const urlApi = "http://localhost:3333";
export const urlApi = "https://knots-whatsapp.herokuapp.com/";

const api = axios.create({
  baseURL: urlApi,
  timeout: 30000,
  headers,
});

export default api;