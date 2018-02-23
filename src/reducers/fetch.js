import {ITEMS_HAS_ERRORED, ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS, TEXT_CHANGED} from '../actions/index';

export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action) {
    debugger;
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            debugger;
            return action.items;

        default:
            return state;
    }
}

export function textoCambiado (state = false, action){
    debugger;
    switch(action.type){
        case 'TEXT_CHANGED':
            return action.texto;
        default:
            return state;
    }
}