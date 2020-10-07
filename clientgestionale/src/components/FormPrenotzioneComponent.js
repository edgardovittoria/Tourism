import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalHeader, Row, Label, Col } from 'reactstrap';
import { LocalForm, Control, Errors } from "react-redux-form";
import DatePicker, { registerLocale } from 'react-datepicker';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import it from 'date-fns/locale/it';
import "react-datepicker/dist/react-datepicker.css";

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
      costo: 40,
      selectedDate: null,
      oreDisponibili: [
        setHours(setMinutes(new Date(), 0), 0),
        setHours(setMinutes(new Date(), 0), 1),
        setHours(setMinutes(new Date(), 0), 2),
        setHours(setMinutes(new Date(), 0), 3),
        setHours(setMinutes(new Date(), 0), 4),
        setHours(setMinutes(new Date(), 0), 5),
        setHours(setMinutes(new Date(), 0), 6),
        setHours(setMinutes(new Date(), 0), 7),
        setHours(setMinutes(new Date(), 0), 8),
        setHours(setMinutes(new Date(), 0), 13),
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 0), 18),
        setHours(setMinutes(new Date(), 0), 19),
        setHours(setMinutes(new Date(), 0), 20),
        setHours(setMinutes(new Date(), 0), 21),
        setHours(setMinutes(new Date(), 0), 22),
        setHours(setMinutes(new Date(), 0), 23)
      ]
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleModal() {
    this.setState({
      IsModalOpen: !this.state.IsModalOpen
    })
  }

  handleSubmit(values) {
    var year = this.state.selectedDate.getFullYear();
    var month = this.state.selectedDate.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    var day = this.state.selectedDate.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    var localeDate = year + "-" + month + "-" + day;
    var hours = this.state.selectedDate.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    var minutes = this.state.selectedDate.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    var localeTime = hours + ":" + minutes;
    var dataSvolgimentoAttivita = localeDate + " " + localeTime;
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
      dataDiPrenotazione: dataSvolgimentoAttivita,
      attivitaPrenotata: this.props.attivita,
    };
    console.log(prenotazione);
    this.props.postPrenotazione(prenotazione);
    this.toggleModal();

  }

  handleChange(values) {
    this.setState({
      costo: this.state.costo * values.numeroPartecipanti
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.toggleModal} className="boxed-btn3">
          <span></span> Prenota
            </button>
        <Modal isOpen={this.state.IsModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Prenotazione</ModalHeader>
          <ModalBody>
            <LocalForm
              onSubmit={(values) => this.handleSubmit(values)}
              onChange={(values) => this.handleChange(values)}>
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
                    placeholder=""
                    className="form-control"
                    defaultValue="1"
                    onChange={value => {
                      if (value.target.value > 5) {
                        this.setState({
                          //oreDisponibili: this.state.oreDisponibili.concat(setHours(setMinutes(new Date(), 0), 11))
                        })
                      }
                    }}
                  >
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
              <Row className="form-group">
                <Label htmlFor="dataSvolgimentoAttivita" md={5}>
                  Data
                  </Label>
                <Col md={10}>

                  <DatePicker
                    id="dataSvolgimentoAttivita"
                    className="form-control"
                    onChange={date => this.setState({
                      selectedDate: date
                    })}
                    showTimeSelect
                    timeIntervals={60}
                    excludeTimes={this.state.oreDisponibili}
                    locale="it"
                    selected={this.state.selectedDate}
                    dateFormat="dd-MM-yyyy HH:mm"
                    placeholderText="clicca per selezionare una data" />
                </Col>
                <Errors
                  className="text-danger"
                  model="dataSvolgimentoAttivita"
                  show="touched"
                  messages={{
                    required: " Il campo non può essere vuoto.",
                  }}
                />
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

export default FormPrenotazione;