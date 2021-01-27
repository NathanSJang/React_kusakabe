import axios from 'axios';

const BASE_URL = '/api/items'

export const fetchItems = () => axios.get(BASE_URL);