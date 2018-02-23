

import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading, textoCambiado } from './fetch';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    textoCambiado
});