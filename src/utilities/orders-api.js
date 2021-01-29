import axios from 'axios';

const BASE_URL = '/api/orders'

export const getCart = () => axios.get(`${BASE_URL}/cart`);
export const getOrders = () => axios.get(BASE_URL);
export const addItemToCart = (itemId) => axios.post(`${BASE_URL}/cart/items/${itemId}`,)