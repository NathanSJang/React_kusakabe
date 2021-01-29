import { GET_CART, GET_ORDERS, ADD_ITEM_TO_CART } from '../constants/actionTypes';


export default (orders = [], action) => {
  switch (action.type) {
    case GET_CART:
        return action.payload;
    case GET_ORDERS:
        return action.payload;
    case ADD_ITEM_TO_CART:
        return [...orders, action.payload];
    default:
      return orders
  };
};