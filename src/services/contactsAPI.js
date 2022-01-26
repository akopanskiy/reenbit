import axios from 'axios';

const URL = 'http://localhost:3000/';
const URLNorris = 'https://api.chucknorris.io/jokes/random';

export const fetchAllContacts = () => {
  return axios.get(`${URL}contacts`);
};

export const fetchContactById = id => {
  return axios.get(`${URL}contacts/${id}`)
};

export const fetchAddMessage = message => {
  return axios.post(`${URL}messages`, message)
};

export const fetchAllMessages = () => {
  return axios.get(`${URL}messages`)
};

export const fetchChuckNorris = () => {
  return axios.get(`${URLNorris}`)
};

