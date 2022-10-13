const axios = require('axios');

const API_URL = 'https://the-one-api.dev/v2';
const token = 'Bearer E_aFfB4DDUPX19ZBiMXT';

// LOTR API INSTANCES

const lotrAPI = axios.create({
  baseURL: API_URL,
  timeout: 4000,
});

const lotrAuthorizedAPI = axios.create({
  baseURL: API_URL,
  timeout: 4000,
  headers: { Authorization: token },
});

module.exports = { lotrAPI, lotrAuthorizedAPI };
