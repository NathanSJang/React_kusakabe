import { combineReducers } from 'redux';

import items from './itmes';
import orders from './orders'

export default combineReducers({ items, orders });