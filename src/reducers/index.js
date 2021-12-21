import { combineReducers } from 'redux';

import tours from './tours';
import cart from './cart';
import filter from './filter';

export default combineReducers({
    tours,
    cart,
    filter,
});