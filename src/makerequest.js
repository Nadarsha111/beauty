import axios from 'axios';

export const makeRequest = axios.create({
  baseURL: 'https://makeup-api.herokuapp.com/api/v1',
  // headers: {
  //       "Content-Type": "application/json"
  //       }
});

