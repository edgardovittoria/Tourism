import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addPrenotazione = (prenotazione) => ({
    type: ActionTypes.ADD_PRENOTAZIONE,
    payload: prenotazione
});

export const delPrenotazione = (id) => ({
    type: ActionTypes.DEL_PRENOTAZIONE,
    id: id
})

export const updPrenotazione = (id, prenotazione) => ({
    type: ActionTypes.UPDATE_PRENOTAZIONE,
    id: id,
    payload: prenotazione
})

export const loadingPrenotazioni = () => ({
    type: ActionTypes.LOADING_PRENOTAZIONI
})

export const failedPrenotazioni = (errmess) => ({
    type: ActionTypes.FAILED_PRENOTAZIONI,
    payload: errmess
})

export const addPrenotazioni = (prenotazioni) => ({
    type: ActionTypes.ADD_PRENOTAZIONI,
    payload: prenotazioni
})

export const fetchPrenotazioni = () => (dispatch) => {
    dispatch(loadingPrenotazioni(true));

    return fetch(baseUrl + 'prenotazioni')
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(prenotazioni => dispatch(addPrenotazioni(prenotazioni)))
        .catch(error => dispatch(failedPrenotazioni(error)))
};

export const postPrenotazione = (prenotazione) => (dispatch) => {

        return fetch(baseUrl + 'prenotazioni', {
            method: 'POST',
            body: JSON.stringify(prenotazione),
            headers:{
                'Content-type': 'Application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(addPrenotazione(response)))
        .catch(error => dispatch(failedPrenotazioni(error)))

    }

export const deletePrenotazione = (id) => (dispatch) => {
    return fetch(baseUrl + 'prenotazioni/' + id, {method: 'DELETE'})
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(() => dispatch(delPrenotazione(id)))
    .catch(error => dispatch(failedPrenotazioni(error)))
}
export const updatePrenotazione = (id, prenotazione) => (dispatch) => {
    return fetch(baseUrl + 'prenotazioni/' + id, {
        method: 'PUT',
        body: JSON.stringify(prenotazione),
        headers:{
            'Content-type': 'Application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(updPrenotazione(id,response)))
    .catch(error => dispatch(failedPrenotazioni(error)))

}



