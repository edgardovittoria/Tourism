import React, { Component } from 'react';
import Home from './HomeComponent';
import { deletePrenotazione, fetchPrenotazioni, postPrenotazione, updatePrenotazione } from '../redux/ActionCreators';

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
        prenotazioni: state.prenotazioni
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchPrenotazioni: () => {dispatch(fetchPrenotazioni())},
    postPrenotazione: (prenotazione) => { dispatch(postPrenotazione(prenotazione))},
    deletePrenotazione: (id) => {dispatch(deletePrenotazione(id))},
    updatePrenotazione: (id, prenotazione) => {dispatch(updatePrenotazione(id, prenotazione))}
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
                    postPrenotazione={this.props.postPrenotazione}
                    deletePrenotazione={this.props.deletePrenotazione}
                    updatePrenotazione={this.props.updatePrenotazione}/>
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