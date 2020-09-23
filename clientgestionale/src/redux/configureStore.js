import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Prenotazioni } from './prenotazioni';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            prenotazioni: Prenotazioni
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};