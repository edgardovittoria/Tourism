import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addPrenotazione = (prenotazione) => ({
    type: ActionTypes.ADD_PRENOTAZIONE,
    payload: prenotazione
});

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

export const postPrenotazione = (
    numeroPartecipanti,
    costoTotale,
    aperta,
    pagata,
    servizioFotografico,
    turistaPrenotante,
    postiDisponibili,
    dataSvolgimentoAttivita,
    oraSvolgimentoAttivita,
    dataDiPrenotazione,
    attivitaPrenotata) => (dispatch) => {

        const newPrenotazione = {
            numeroPartecipanti: numeroPartecipanti,
            costoTotale: costoTotale,
            aperta: aperta,
            pagata: pagata,
            servizioFotografico: servizioFotografico,
            turistaPrenotante: {
                id: turistaPrenotante.id,
                nome: turistaPrenotante.nome,
                recapitoTelefonico: turistaPrenotante.recapitoTelefonico
            },
            postiDisponibili: postiDisponibili,
            dataSvolgimentoAttivita: dataSvolgimentoAttivita,
            oraSvolgimentoAttivita: oraSvolgimentoAttivita,
            dataDiPrenotazione: dataDiPrenotazione,
            attivitaPrenotata: {
                id: attivitaPrenotata.id,
                nome: attivitaPrenotata.nome,
                costo: attivitaPrenotata.costo,
                tipologia:attivitaPrenotata.tipologia,
                image: attivitaPrenotata.image,
                descrizione: attivitaPrenotata.descrizione,
                luogo: attivitaPrenotata.luogo
            }
        };

        return fetch(baseUrl + 'prenotazioni', {
            method: 'POST',
            body: JSON.stringify(newPrenotazione),
            headers:{
                'Content-type': 'Application/json'
            }
        })
        .then().then(response => {
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