import * as ActionTypes from './ActionTypes';

export const PrenotazioniAdmin = (state = {
    isLoading: true,
    errMess: null,
    prenotazioniAdmin: []}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PRENOTAZIONE_ADMIN:
            var prenotazione = action.payload;
            return {...state, prenotazioniAdmin: state.prenotazioniAdmin.concat(prenotazione)}

        case ActionTypes.DEL_PRENOTAZIONE_ADMIN:
            return{...state, prenotazioniAdmin: state.prenotazioniAdmin.filter(prenotazione => prenotazione.id !== action.id)}

        case ActionTypes.UPDATE_PRENOTAZIONE_ADMIN:
            var prenotazioniUpdated = state.prenotazioniAdmin.filter(prenotazione => prenotazione.id !== action.id);
            return{...state, prenotazioniAdmin: prenotazioniUpdated.concat(action.payload)}    
        
        case ActionTypes.ADD_PRENOTAZIONI_ADMIN:
            return {...state, errMess: null, prenotazioniAdmin: action.payload}

        case ActionTypes.LOADING_PRENOTAZIONI_ADMIN:
            return {...state, isLoading: true, errMess: null, prenotazioniAdmin: []}

        case ActionTypes.FAILED_PRENOTAZIONI_ADMIN:
            return {...state, isLoading: false, errMess: action.payload}

        default: return state;
    }
};
