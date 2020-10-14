import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addPrenotazione = (prenotazione) => ({
    type: ActionTypes.ADD_PRENOTAZIONE,
    payload: prenotazione
});

export const addPrenotazioni = (prenotazioni) => ({
    type: ActionTypes.ADD_PRENOTAZIONI,
    payload: prenotazioni
})

export const loadingPrenotazioni = () => ({
    type: ActionTypes.LOADING_PRENOTAZIONI
})

export const failedPrenotazioni = (errmess) => ({
    type: ActionTypes.FAILED_PRENOTAZIONI,
    payload: errmess
})

export const addPrenotazioniAdmin = (prenotazioni) => ({
    type: ActionTypes.ADD_PRENOTAZIONI_ADMIN,
    payload: prenotazioni
})

export const addPrenotazioneAdmin = (prenotazione) => ({
    type: ActionTypes.ADD_PRENOTAZIONE_ADMIN,
    payload: prenotazione
});

export const delPrenotazioneAdmin = (id) => ({
    type: ActionTypes.DEL_PRENOTAZIONE_ADMIN,
    id: id
})

export const updPrenotazioneAdmin = (id, prenotazione) => ({
    type: ActionTypes.UPDATE_PRENOTAZIONE_ADMIN,
    id: id,
    payload: prenotazione
})

export const loadingPrenotazioniAdmin = () => ({
    type: ActionTypes.LOADING_PRENOTAZIONI_ADMIN
})

export const failedPrenotazioniAdmin = (errmess) => ({
    type: ActionTypes.FAILED_PRENOTAZIONI_ADMIN,
    payload: errmess
})

export const fetchPrenotazioniAdmin = () => (dispatch) => {
    dispatch(loadingPrenotazioniAdmin(true));

    return fetch(baseUrl + 'admin/prenotazioni/'+localStorage.getItem("username"), {
        headers: {
            "X-Auth": localStorage.getItem("xAuth")
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(prenotazioni => dispatch(addPrenotazioniAdmin(prenotazioni)))
        .catch(error => dispatch(failedPrenotazioniAdmin(error)))
};

export const postPrenotazioneAdmin = (prenotazione) => (dispatch) => {

    return fetch(baseUrl + 'admin/prenotazioni', {
        method: 'POST',
        body: JSON.stringify(prenotazione),
        headers: {
            'Content-type': 'Application/json',
            'X-Auth': sessionStorage.getItem('X-Auth')
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(addPrenotazioneAdmin(response)))
        .catch(error => dispatch(failedPrenotazioniAdmin(error)))

}

export const deletePrenotazioneAdmin = (id) => (dispatch) => {
    return fetch(baseUrl + 'admin/prenotazioni/' + id, { 
        method: 'DELETE',
        headers: {
            'X-Auth': sessionStorage.getItem('X-Auth')
        } 
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(() => dispatch(delPrenotazioneAdmin(id)))
        .catch(error => dispatch(failedPrenotazioniAdmin(error)))
}
export const updatePrenotazioneAdmin = (id, prenotazione) => (dispatch) => {
    return fetch(baseUrl + 'admin/prenotazioni/' + id, {
        method: 'PUT',
        body: JSON.stringify(prenotazione),
        headers: {
            'Content-type': 'Application/json',
            'X-Auth': sessionStorage.getItem('X-Auth')
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(updPrenotazioneAdmin(id, response)))
        .catch(error => dispatch(failedPrenotazioniAdmin(error)))

}

export const fetchPrenotazioni = (data) => (dispatch) => {
    dispatch(loadingPrenotazioni(true));

    return fetch(baseUrl + 'prenotazioni?data='+data)
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
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
        headers: {
            'Content-type': 'Application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(addPrenotazione(response)))
        .catch(error => dispatch(failedPrenotazioni(error)))

}

export const loadingAttivita = () => ({
    type: ActionTypes.LOADING_ATTIVITA
})

export const failedAttivita = (errmess) => ({
    type: ActionTypes.FAILED_ATTIVITA,
    payload: errmess
})

export const addAttivita = (attivita) => ({
    type: ActionTypes.ADD_ATTIVITA,
    payload: attivita
})


export const fetchAttivita = () => (dispatch) => {
    dispatch(loadingAttivita(true));

    return fetch(baseUrl + 'attivita')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(attivita => dispatch(addAttivita(attivita)))
        .catch(error => dispatch(failedAttivita(error)))
};

export const loadingUtente = () => ({
    type: ActionTypes.LOADING_UTENTE
})

export const failedUtente = (errmess) => ({
    type: ActionTypes.FAILED_UTENTE,
    payload: errmess
})

export const addUtente = (utente) => ({
    type: ActionTypes.ADD_UTENTE,
    payload: utente
})


export const login = (utente) => (dispatch) => {

    return fetch(baseUrl + 'admin/login', {
        method: 'POST',
        body: JSON.stringify(utente),
        headers: {
            'Content-type': 'Application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(addUtente(response)))
        .then(response => {
            localStorage.setItem("xAuth", response.payload.xAuth);
            localStorage.setItem("expire", response.payload.expire);
            localStorage.setItem("username", response.payload.username);
        })
        .catch(error => {
            dispatch(failedUtente(error))
            alert("username o password sbagliati")
        })

}
