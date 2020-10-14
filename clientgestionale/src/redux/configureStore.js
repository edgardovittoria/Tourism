import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Prenotazioni } from './prenotazioni';
import { PrenotazioniAdmin } from './prenotazioniAdmin';
import { Attivita } from './attivita';
import { Utente } from './utente';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            prenotazioni: Prenotazioni,
            prenotazioniAdmin: PrenotazioniAdmin,
            attivita: Attivita,
            utente: Utente
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};