import React, { Component } from 'react';
import MyHeader from './MyHeaderComponent';
import MyCarousel from './MyCarouselComponent';
import AttivitaNeiPaesi from './AttivitaNeiPaesiComponent';
import FormRicerca from './FormRicercaComponent';
import AttivitaPopolari from './AttivitaPopolariComponent';
import Footer from './FooterComponent';

class MyHome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MyHeader login={this.props.login}
                    fetchPrenotazioniAdmin={this.props.fetchPrenotazioniAdmin}
                    postPrenotazione={this.props.postPrenotazioneAdmin}
                    deletePrenotazione={this.props.deletePrenotazioneAdmin}
                    updatePrenotazione={this.props.updatePrenotazioneAdmin} 
                    utente={this.props.utente}/>
                <MyCarousel />
                <FormRicerca />
                <AttivitaNeiPaesi/>
                <AttivitaPopolari attivita={this.props.attivita.filter((attivita) => attivita.homePage === true)}
                    prenotazioni={this.props.prenotazioni}
                    isLoading={this.props.loadingAttivita}
                    errMess={this.props.attivitaErrMess}/>
                <Footer/>
            </div>

        );
    }
}

export default MyHome;