import { combineReducers } from 'redux';

import items from './itmes';
import orders from './orders'
import users from './users'



export default combineReducers({ items, orders, users });