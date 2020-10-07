import * as ActionTypes from './ActionTypes';

export const Attivita = (state = {
    isLoading: true,
    errMess: null,
    attivita: []}, action) => {
    switch(action.type) {        
        case ActionTypes.ADD_ATTIVITA:
            return {...state, isLoading: false, errMess: null, attivita: action.payload}

        case ActionTypes.LOADING_ATTIVITA:
            return {...state, isLoading: true, errMess: null, attivita: []}

        case ActionTypes.FAILED_ATTIVITA:
            return {...state, isLoading: false, errMess: action.payload}

        default: return state;
    }
};
