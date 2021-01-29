import { GET_CART, GET_ORDERS, ADD_ITEM_TO_CART } from '../constants/actionTypes';
import * as ordersAPI from '../../orders-api';

export const getCart = () => async (dispatch) => {
  try {
    const { data } = await ordersAPI.getCart();
    dispatch({ type: GET_CART, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const addToCart = (itemid) => async (dispatch) => {
  try {
    const { data } = await ordersAPI.addItemToCart(itemid)
    dispatch({ type: GET_CART, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}



export const getOrders = () => async (dispatch) => {
  try {
    const { data } = await ordersAPI.getOrders();
    dispatch({ type: GET_ORDERS, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}
