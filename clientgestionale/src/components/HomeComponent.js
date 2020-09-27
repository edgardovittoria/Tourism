import React from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  Month,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
import { editorWindowTemplate } from "../shared/editorWindowTemplate";
import { Rafting } from "../shared/attivita";
import { Button, ButtonComponent } from "@syncfusion/ej2-react-buttons";

function Home(props) {
  var data;

  if (props.prenotazioni[0] != null) {
    data = [];
    for (var i = 0; i < props.prenotazioni.length; i++) {
      var date = new Date(props.prenotazioni[i].dataSvolgimentoAttivita);
      var prenotazione = {
        Id: props.prenotazioni[i].id,
        Subject: props.prenotazioni[i].turistaPrenotante.nome,
        NumPartecipanti: props.prenotazioni[i].numeroPartecipanti,
        NumeroTelefonico:
          props.prenotazioni[i].turistaPrenotante.recapitoTelefonico,
        StartTime: date,
        EndTime: date,
        pagata: props.prenotazioni[i].pagata,
        servizioFotografico: props.prenotazioni[i].servizioFotografico
      };
      data.push(prenotazione);
    }
  }

  const onActionBegin = (evt) => {
    var year;
    var month;
    var day;
    var localeDate;
    var hours;
    var minutes;
    var localeTime;
    var dataSvolgimentoAttivita;
    if (evt.requestType === "eventCreate") {
      year = evt.addedRecords[0].StartTime.getFullYear();
      month = evt.addedRecords[0].StartTime.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      day = evt.addedRecords[0].StartTime.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      localeDate = year + "-" + month + "-" + day;
      hours = evt.addedRecords[0].StartTime.getHours();
      if (hours < 10) {
        hours = "0" + hours;
      }
      minutes = evt.addedRecords[0].StartTime.getMinutes();
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      localeTime = hours + ":" + minutes;
      dataSvolgimentoAttivita = localeDate + " " + localeTime;
      var prenotazione = {
        id: evt.addedRecords[0].Id,
        numeroPartecipanti: evt.addedRecords[0].NumPartecipanti,
        costoTotale: 35 * evt.addedRecords[0].NumPartecipanti,
        pagata: evt.addedRecords[0].pagata,
        servizioFotografico: evt.addedRecords[0].servizioFotografico,
        turistaPrenotante: {
          nome: evt.addedRecords[0].Subject,
          recapitoTelefonico: evt.addedRecords[0].NumeroTelefonico,
        },
        postiDisponibili: 15,
        dataSvolgimentoAttivita: dataSvolgimentoAttivita,
        dataDiPrenotazione: dataSvolgimentoAttivita,
        attivitaPrenotata: Rafting,
      };
      props.postPrenotazione(prenotazione);
    } else if (evt.requestType === "eventRemove") {
      console.log(evt.data[0].Id);
      props.deletePrenotazione(evt.data[0].Id);
    } else if (evt.requestType === "eventChange") {
      var prenotazioneDaModificare = props.prenotazioni.filter(
        (prenotazione) => prenotazione.id === evt.changedRecords[0].Id
      )[0];
      year = evt.changedRecords[0].StartTime.getFullYear();
      month = evt.changedRecords[0].StartTime.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      day = evt.changedRecords[0].StartTime.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      localeDate = year + "-" + month + "-" + day;
      hours = evt.changedRecords[0].StartTime.getHours();
      if (hours < 10) {
        hours = "0" + hours;
      }
      minutes = evt.changedRecords[0].StartTime.getMinutes();
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      localeTime = hours + ":" + minutes;
      dataSvolgimentoAttivita = localeDate + " " + localeTime;

      prenotazioneDaModificare.id = evt.changedRecords[0].Id;
      prenotazioneDaModificare.numeroPartecipanti = evt.changedRecords[0].NumPartecipanti;
      prenotazioneDaModificare.costoTotale = 35 * evt.changedRecords[0].NumPartecipanti;
      prenotazioneDaModificare.pagata = evt.changedRecords[0].pagata;
      prenotazioneDaModificare.servizioFotografico = evt.changedRecords[0].servizioFotografico;
      prenotazioneDaModificare.turistaPrenotante = {
        id: prenotazioneDaModificare.turistaPrenotante.id,
        nome: evt.changedRecords[0].Subject,
        recapitoTelefonico: evt.changedRecords[0].NumeroTelefonico,
      };
      prenotazioneDaModificare.dataSvolgimentoAttivita = dataSvolgimentoAttivita;
      prenotazioneDaModificare.dataDiPrenotazione = dataSvolgimentoAttivita;

      props.updatePrenotazione(prenotazioneDaModificare.id, prenotazioneDaModificare);
    }
  };

  return (
    <div>
      <ScheduleComponent
        editorTemplate={editorWindowTemplate}
        startHour="09:00"
        endHour="16:00"
        locale="it-CH"
        eventSettings={{ dataSource: data }}
        actionBegin={onActionBegin}
        showQuickInfo={false}
      >
        <ViewsDirective>
          <ViewDirective option="Day" displayName="OGGI">
          </ViewDirective>
          <ViewDirective option="Week" displayName="SETTIMANA" />
          <ViewDirective option="Month" displayName="MESE" />
        </ViewsDirective>
        <Inject services={[Day, Week, Month]} />
      </ScheduleComponent>
    </div>
  );
}

export default Home;
