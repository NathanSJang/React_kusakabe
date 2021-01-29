import { AUTH } from '../constants/actionTypes';
import * as userAPI from '../../users-api';

export const logIn = (formData) => async (dispatch) => {
  try {
    // log in the user
    const { data } = await userAPI.login(formData);
    dispatch({ type: AUTH, payload: data })

  } catch (error) {
    console.log(error)
  }
}
export const signUp = (formData) => async (dispatch) => {
  try {
    // sign UP the user
    const { data } = await userAPI.signUp(formData);
    dispatch({ type: AUTH, payload: data})
  } catch (error) {
    console.log(error)
  }
}