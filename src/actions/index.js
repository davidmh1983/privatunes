import {ITEMS_HAS_ERRORED, ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS, TEXT_CHANGED} from './types';
import Axios from 'axios';

export function itemsHasErrored(bool) {
    debugger;
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    debugger;
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    debugger;
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items: items
    };
}

export function TestText(texto){
    debugger;
    return {
        type:'TEXT_CHANGED',
        texto :texto
    };
}

export const fetchData = (url)=> {
    debugger;
    return (dispatch) => {
        return Axios.get(url)
            .then(response => {
                dispatch(itemsFetchDataSuccess(response.data.results))
            })
            .catch(error => {
                throw(error);
            })
    };
};

/*export function fetchData(url) {
    debugger;
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {

                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export const loadSectionsThunk = () => {
    return function(dispatch) {
        dispatch({
            type: FETCH_SECTIONS_REQUEST
        });
        return api.getSections()
            .then(
                sections => {
                    dispatch({
                        type: FETCH_SECTIONS_SUCCESS,
                        payload: sections
                    });
                },
                error => {
                    dispatch({
                        type: FETCH_SECTIONS_FAILURE,
                        payload: error
                    });
                });
    }
}


export const sendText = (text) => {
    let apiaddress= 'https://itunes.apple.com/search?term=' + text;
    fetch(apiaddress)
        .then(results =>{
            return({
                type:FETCH_SECTIONS_SUCCESS,
                payload: results.json()
            })
        })
}


/*export const sendText = (url) => {

    return fetch(url).then(respuesta => {
        debugger;
        return {
            type: FETCH_SECTIONS_SUCCESS,
            payload: respuesta
        }
    });
};*/

/*export const actionSendText = (url) => {
    return function(dispatch) {
        dispatch({
            type: FETCH_SECTIONS_REQUEST
        });
        const getData = async () => {
            return await fetch(url);
        };
        return fetch(url)
            .then(
                response => {
                    dispatch({
                        type: FETCH_SECTIONS_SUCCESS,
                        payload: response.json()
                    });
                },
                error => {
                    dispatch({
                        type: FETCH_SECTIONS_FAILURE,
                        payload: error
                    });
                });
    }
}
*/