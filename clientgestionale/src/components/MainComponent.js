import React, { Component } from 'react';
import Admin from './AdminComponent';
import Home from './HomeComponent';
import MyHome from './MyHomeComponent';
import DettagliAttivita from './DettagliAtiivitaComponent';
import { deletePrenotazioneAdmin, fetchPrenotazioniAdmin, postPrenotazioneAdmin, updatePrenotazioneAdmin, fetchPrenotazioni, postPrenotazione, fetchAttivita, login } from '../redux/ActionCreators';
import { dateToString } from '../utility/DateToString';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { L10n } from "@syncfusion/ej2-base";

L10n.load({
    "it-CH": {
        schedule: {
            saveButton: "Aggiungi",
            cancelButton: "Chiudi",
            deleteButton: "Rimuovi",
            newEvent: "Aggiungi Prenotazione",
        },
    },
});

const mapStateToProps = (state) => {
    return {
        prenotazioni: state.prenotazioni,
        prenotazioniAdmin: state.prenotazioniAdmin,
        attivita: state.attivita
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchPrenotazioni: (data) => { dispatch(fetchPrenotazioni(data)) },
    postPrenotazione: (prenotazione) => { dispatch(postPrenotazione(prenotazione)) },
    fetchPrenotazioniAdmin: () => { dispatch(fetchPrenotazioniAdmin()) },
    postPrenotazioneAdmin: (prenotazione) => { dispatch(postPrenotazioneAdmin(prenotazione)) },
    deletePrenotazioneAdmin: (id) => { dispatch(deletePrenotazioneAdmin(id)) },
    updatePrenotazioneAdmin: (id, prenotazione) => { dispatch(updatePrenotazioneAdmin(id, prenotazione)) },
    fetchAttivita: () => { dispatch(fetchAttivita()) },
    login: (utente) => { dispatch(login(utente))}
});

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var currentDate = new Date();
        if(localStorage.getItem("xAuth") != null && currentDate.getTime() < parseInt(localStorage.getItem("expire"))){
            this.props.fetchPrenotazioniAdmin()
        }else{
            var data = new Date();
            console.log(dateToString(data));
            this.props.fetchPrenotazioni(dateToString(data));
            this.props.fetchAttivita();
        }
        
    }


    render() {
        const AdminPage = () => {
            return (
                <Admin
                    prenotazioni={this.props.prenotazioniAdmin.prenotazioniAdmin}
                    postPrenotazione={this.props.postPrenotazioneAdmin}
                    deletePrenotazione={this.props.deletePrenotazioneAdmin}
                    updatePrenotazione={this.props.updatePrenotazioneAdmin} 
                    utente={this.props.utente}/>
            )
        }
        const HomePage = () => {
            return (
                <Home />
            )
        }

        const MyHomePage = () => {
            return (
                <MyHome attivita={this.props.attivita.attivita}
                    loadingAttivita={this.props.attivita.isLoading}
                    attivitaErrMess={this.props.attivita.errMess} 
                    login={this.props.login}/>
            )
        }

        const AttivitaWithId = ({ match }) => {
            return (
                <DettagliAttivita attivita={this.props.attivita.attivita.filter((attivita) => attivita.id === parseInt(match.params.idAttivita, 10))[0]}
                    prenotazioni={this.props.prenotazioni.prenotazioni}
                    isLoading={this.props.attivita.isLoading}
                    errMess={this.props.attivita.errMess}
                    postPrenotazione={this.props.postPrenotazione} />
            )
        }

        return (
            <div className="App">
                <Switch>
                    <Route exact path="/admin" component={AdminPage} />
                    <Route path="/home" component={MyHomePage} />
                    <Route path="/attivita/:idAttivita" component={AttivitaWithId} />
                    <Redirect to="/home" />
                </Switch>

            </div>
        )
    };

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));