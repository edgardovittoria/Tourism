import * as ActionTypes from './ActionTypes';

export const Prenotazioni = (state = {
    isLoading: true,
    errMess: null,
    prenotazioni: []}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PRENOTAZIONE:
            var prenotazione = action.payload;
            return {...state, prenotazioni: state.prenotazioni.concat(prenotazione)}

        case ActionTypes.DEL_PRENOTAZIONE:
            return{...state, prenotazioni: state.prenotazioni.filter(prenotazione => prenotazione.id !== action.id)}

        case ActionTypes.UPDATE_PRENOTAZIONE:
            var prenotazioniUpdated = state.prenotazioni.filter(prenotazione => prenotazione.id !== action.id);
            return{...state, prenotazioni: prenotazioniUpdated.concat(action.payload)}    
        
        case ActionTypes.ADD_PRENOTAZIONI:
            return {...state, errMess: null, prenotazioni: action.payload}

        case ActionTypes.LOADING_PRENOTAZIONI:
            return {...state, isLoading: true, errMess: null, prenotazioni: []}

        case ActionTypes.FAILED_PRENOTAZIONI:
            return {...state, isLoading: false, errMess: action.payload}

        default: return state;
    }
};
