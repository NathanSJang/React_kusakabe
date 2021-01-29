import { AUTH } from '../constants/actionTypes';
import { getUser } from '../../users-service'

let user = getUser('user');
console.log(user)
export default (state = [], action) => {
  switch (action.type) {
    case AUTH:
      return user
  
    default:
      return state;
  }
}

