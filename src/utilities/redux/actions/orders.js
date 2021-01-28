import { GET_CART } from '../constants/orderActionTypes';
import * as ordersAPI from '../../orders-api';

export const getCart = () => async (dispatch) => {
  try {
    const { data } = await ordersAPI.getCart();
    dispatch({ type: GET_CART, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}
