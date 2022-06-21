import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://products-ecommerce.herokuapp.com'
});
