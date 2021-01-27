import { FETCH_ALL } from '../constants/itemActionTypes'

export default(items = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
        return action.payload;
    default:
      return items
  };
};