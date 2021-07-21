import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;
const headers = {};

export default axios.create({
  baseURL,
  headers,
});
