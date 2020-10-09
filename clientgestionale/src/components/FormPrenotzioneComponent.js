import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, Row, Label, Col } from 'reactstrap';
import { LocalForm, Control, Errors } from "react-redux-form";
import { dateToString, timeToString } from '../utility/DateToString';
import DatePicker, { registerLocale } from 'react-datepicker';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import it from 'date-fns/locale/it';
import "react-datepicker/dist/react-datepicker.css";
import { baseUrlReact } from '../shared/baseUrl';

registerLocale('it', it);

const required = (val) => val && val.length;
const maxLength = (len) => (val) => (!val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));


class FormPrenotazione extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IsModalOpen: false,
      costo: this.props.attivita.costo,
      numeroPartecipanti: null,
      selectedDate: null,
      selectedTime: null, 
      oreNonDisponibili: [],
      dateNonDisponibili:[
        new Date()
      ]
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      IsModalOpen: !this.state.IsModalOpen
    })
  }

  handleSubmit(values) {
    var dataSvolgimentoAttivita = dateToString(this.state.selectedDate);
    var oraSvolgimentoAttivita = timeToString(this.state.selectedTime);
    var dataDiPrenotazione = dateToString(new Date());
    var oraDiPrenotazione = timeToString(new Date());
    var prenotazione = {
      numeroPartecipanti: values.numeroPartecipanti,
      costoTotale: 35 * values.numeroPartecipanti,
      pagata: true,
      servizioFotografico: false,
      turistaPrenotante: {
        nome: values.turistaPrenotante,
        recapitoTelefonico: values.numeroTelefonico,
      },
      postiDisponibili: 15,
      dataSvolgimentoAttivita: dataSvolgimentoAttivita,
      oraSvolgimentoAttivita: oraSvolgimentoAttivita,
      dataDiPrenotazione: dataDiPrenotazione+" "+oraDiPrenotazione,
      attivitaPrenotata: this.props.attivita,
    };
    this.props.postPrenotazione(prenotazione);
    alert("la prenotazione da lei effettuata è andata a buon fine. A breve riceverà un messaggio WhatsApp di conferma.")
    this.toggleModal();
    window.location = baseUrlReact;

  }
  
  render() {
    if (this.props.prenotazioni != null && this.props.attivita != null) {
      return (
        <div>
          <button onClick={this.toggleModal} className="boxed-btn3">
            <span></span> Prenota
              </button>
          <Modal isOpen={this.state.IsModalOpen} toggle={this.toggleModal} scrollable={true}>
            <ModalHeader toggle={this.toggleModal}>Prenotazione</ModalHeader>
            <ModalBody>
              <LocalForm
                onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                  <Label htmlFor="turistaPrenotante" md={5}>
                    Turista Prenotante
                    </Label>
                  <Col md={10}>
                    <Control.text
                      model=".turistaPrenotante"
                      id="turistaPrenotante"
                      name="turistaPrenotante"
                      placeholder="Nome e Cognome"
                      className="form-control"
                      validators={{
                        required: required,
                        minLength: minLength(3),
                        maxLength: maxLength(20),
                      }}
                    />
                  </Col>
                  <Errors
                    className="text-danger"
                    model=".turistaPrenotante"
                    show="touched"
                    messages={{
                      required: " Il campo non può essere vuoto.",
                      minLength: " Almeno 3 caratteri.",
                      maxLength: " Massimo 20 caratteri.",
                    }}
                  />
                </Row>
                <Row className="form-group">
                  <Label htmlFor="numeroTelefonico" md={5}>
                    Numero Telefonico
                    </Label>
                  <Col md={10}>
                    <Control.text
                      model=".numeroTelefonico"
                      id="numeroTelefonico"
                      name="numeroTelefonico"
                      placeholder="Tel."
                      className="form-control"
                      validators={{
                        required: required,
                        minLength: minLength(10),
                        maxLength: maxLength(10),
                        isNumber: isNumber
                      }}
                    />
                  </Col>
                  <Errors
                    className="text-danger"
                    model=".numeroTelefonico"
                    show="touched"
                    messages={{
                      required: " Il campo non può essere vuoto.",
                      minLength: " Deve essere 10 numeri.",
                      maxLength: " Deve essere 10 numeri.",
                      isNumber: " Devono esserci esclusivamente numeri."
                    }}
                  />
                </Row>
                <Row className="form-group">
                  <Label htmlFor="numeroPartecipanti" md={5}>
                    Numero Partecipanti
                    </Label>
                  <Col md={10}>
                    <Control.select
                      model=".numeroPartecipanti"
                      id="numeroPartecipanti"
                      name="numeroPartecipanti"
                      placeholderText="Seleziona il numero di partecipanti"
                      className="form-control"
                      onChange={value => {
                        this.state.costo = this.props.attivita.costo
                        this.setState({
                          numeroPartecipanti: parseInt(value.target.value, 10),
                          costo: this.state.costo * parseInt(value.target.value, 10),
                          selectedDate: null,
                          selectedTime: null
                        })
                        document.querySelector(".dataSvolgimentoAttivita").setAttribute("style", "display: flex");
                      }}
                    >
                      <option hidden value="0">Seleziona il numero di partecipanti</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                    </Control.select>
                    <div style={{ color: "blue" }}>Costo : {this.state.costo}€</div>
                  </Col>
                </Row>
                <Row className="form-group dataSvolgimentoAttivita">
                  <Label htmlFor="dataSvolgimentoAttivita" md={5}>
                    Data
                    </Label>
                  <Col md={10}>

                    <DatePicker
                      id="dataSvolgimentoAttivita"
                      className="form-control"
                      onChange={date => {
                        this.state.oreNonDisponibili = [];
                        this.state.oreNonDisponibili.push(setHours(setMinutes(new Date(), 0), 13));
                        this.setState({
                          selectedDate: date,
                          selectedTime: null
                        })
                        var data = dateToString(date);
                        var prenotazioniDelGiorno = this.props.prenotazioni.filter((prenotazione) => prenotazione.dataSvolgimentoAttivita === data);
                        prenotazioniDelGiorno.forEach((prenotazione) => {
                          if(this.state.numeroPartecipanti+prenotazione.numeroPartecipanti > prenotazione.postiDisponibili){
                            this.state.oreNonDisponibili.push(setHours(setMinutes(new Date(), 0), parseInt(prenotazione.oraSvolgimentoAttivita)));
                          }                          
                        })
                        document.querySelector(".oraSvolgimentoAttivita").setAttribute("style", "display: flex");
                      }}
                      excludeDates={this.state.dateNonDisponibili}
                      minDate={new Date()}
                      locale="it"
                      selected={this.state.selectedDate}
                      dateFormat="dd-MM-yyyy"
                      placeholderText="clicca per selezionare una data"
                      required={true} />
                  </Col>
                </Row>
                <Row className="form-group oraSvolgimentoAttivita">
                  <Label htmlFor="oraSvolgimentoAttivita" md={5}>
                    Ora
                    </Label>
                  <Col md={10}>

                    <DatePicker
                      modal=".oraSvolgimentoAttivita"
                      id="oraSvolgimentoAttivita"
                      className="form-control"
                      onChange={time => {
                        this.setState({
                        selectedTime: time
                        })
                      }}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={60}
                      excludeTimes={this.state.oreNonDisponibili}
                      minTime={setHours(setMinutes(new Date(), 0), 9)}
                      maxTime={setHours(setMinutes(new Date(), 0), 16)}
                      locale="it"
                      selected={this.state.selectedTime}
                      timeFormat="HH:mm"
                      dateFormat="HH:mm"
                      placeholderText="clicca per selezionare l'ora"
                      required={true} />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 10, offset: 0 }}>
                    <button type="submit" className="boxed-btn3">
                      <span></span> Prenota
                    </button>
                  </Col>
                </Row>
              </LocalForm>
            </ModalBody>
          </Modal>
        </div>
      )
    }
  }

}

export default FormPrenotazione;