import { GET_CART } from '../constants/orderActionTypes';


export default (orders = [], action) => {
  switch (action.type) {
    case GET_CART:
        return action.payload;
    default:
      return orders
  };
};