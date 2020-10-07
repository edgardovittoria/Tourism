import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Prenotazioni } from './prenotazioni';
import { Attivita } from './attivita';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            prenotazioni: Prenotazioni,
            attivita: Attivita
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};