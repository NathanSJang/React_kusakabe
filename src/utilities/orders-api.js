import axios from 'axios';

const BASE_URL = '/api/orders'

export const getCart = () => axios.get(BASE_URL);