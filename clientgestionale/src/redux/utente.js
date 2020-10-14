import * as ActionTypes from './ActionTypes';

export const Utente = (state = {
    isLoading: true,
    errMess: null,
    utente: null}, action) => {
    switch(action.type) {        
        case ActionTypes.ADD_UTENTE:
            window.location = "http://192.168.1.12:3000/admin";
            return {...state, isLoading: false, errMess: null, utente: action.payload}

        case ActionTypes.LOADING_UTENTE:
            return {...state, isLoading: true, errMess: null, utente: null}

        case ActionTypes.FAILED_UTENTE:
            return {...state, isLoading: false, errMess: action.payload}

        default: return state;
    }
};
