import React, { Component } from 'react';
import Home from './HomeComponent';
import { fetchPrenotazioni, postPrenotazione } from '../redux/ActionCreators';

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        prenotazioni: state.prenotazioni
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchPrenotazioni: () => { dispatch(fetchPrenotazioni())},
    postPrenotazione: (numeroPartecipanti,costoTotale,aperta,pagata,servizioFotografico,turistaPrenotante,postiDisponibili,dataSvolgimentoAttivita,oraSvolgimentoAttivita,dataDiPrenotazione,attivitaPrenotata) => { dispatch(postPrenotazione(numeroPartecipanti,costoTotale,aperta,pagata,servizioFotografico,turistaPrenotante,postiDisponibili,dataSvolgimentoAttivita,oraSvolgimentoAttivita,dataDiPrenotazione,attivitaPrenotata))}
});

class Main extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchPrenotazioni();
    }

    render() {
        const HomePage = () => {
            return(
                <Home 
                    prenotazioni={this.props.prenotazioni.prenotazioni}
                    loadingPrenotazioni={this.props.prenotazioni.isLoading}
                    prenotazioniErrMess={this.props.prenotazioni.errMess}
                    postPrenotazione={this.props.postPrenotazione}/>
            )
        }
        return(
            <div className="App">
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    };

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));