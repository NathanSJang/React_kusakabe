import { FETCH_ALL } from '../constants/actionTypes'
import * as itemsAPI from '../../items-api'

// Action creator

export const getItems = () => async (dispatch) => {
  try {
    const { data } = await itemsAPI.fetchItems();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message)
  }
}