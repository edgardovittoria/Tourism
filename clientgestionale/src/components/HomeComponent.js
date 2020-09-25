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
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
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

const editorWindowTemplate = (props) => {
  return (
    <table
      className="custom-event-editor"
      style={{ width: "100%", cellpadding: "5" }}
    >
      <tbody>
        <tr>
          <td className="e-textlabel">Turista Prenotante</td>
          <td colSpan={4}>
            <input
              id="Subject"
              className="e-field e-input"
              type="text"
              name="Subject"
              style={{ width: "100%" }}
            />
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">Numero Telefonico</td>
          <td colSpan={4}>
            <input
              id="NumeroTelefonico"
              className="e-field e-input"
              type="text"
              data-name="NumeroTelefonico"
              style={{ width: "100%" }}
            />
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">Numero Partecipanti</td>
          <td colSpan={4}>
            <DropDownListComponent
              id="NumPartecipanti"
              placeholder="Indica il numero di partecipanti"
              data-name="NumPartecipanti"
              className="e-field"
              style={{ width: "100%" }}
              dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              value={props.NumPartecipanti || null}
            ></DropDownListComponent>
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">Da</td>
          <td colSpan={4}>
            <DateTimePickerComponent
              format="dd/MM/yy hh:mm"
              locale="it-CH"
              id="StartTime"
              data-name="StartTime"
              value={new Date(props.startTime || props.StartTime)}
              className="e-field"
            ></DateTimePickerComponent>
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">A</td>
          <td colSpan={4}>
            <DateTimePickerComponent
              format="dd/MM/yy hh:mm"
              locale="it-CH"
              id="EndTime"
              data-name="EndTime"
              value={new Date(props.endTime || props.EndTime)}
              className="e-field"
            ></DateTimePickerComponent>
          </td>
        </tr>
      </tbody>
    </table>
  );
};


function Home(props) {
    var data;
    
    if(props.prenotazioni[0] != null){
        var data = [];
        for(var i = 0; i<props.prenotazioni.length;i++){
            var date = new Date(props.prenotazioni[i].dataSvolgimentoAttivita);
            var officialDate = new Date(date);
            var prenotazione = {
                Id: props.prenotazioni[i].id,
                Subject: props.prenotazioni[i].turistaPrenotante.nome,
                NumPartecipanti: props.prenotazioni[i].numeroPartecipanti,
                NumeroTelefonico: props.prenotazioni[i].turistaPrenotante.recapitoTelefonico,
                StartTime: date,
                EndTime: date
            }
            data.push(prenotazione);
            console.log(props.prenotazioni[i].dataSvolgimentoAttivita);
        }
        
  }
 
  const onActionBegin = (evt) => {
      if(evt.requestType === 'eventCreate'){
          var year = evt.addedRecords[0].StartTime.getFullYear();
          var month = evt.addedRecords[0].StartTime.getMonth()+1;
          if(month < 10){
              month = '0'+month;
          }
          var day = evt.addedRecords[0].StartTime.getDate();
          if(day < 10){
              day = '0'+day;
          }
          var localeDate = year + '-' + month + '-' + day;
          var hours = evt.addedRecords[0].StartTime.getHours();
          if(hours < 10){
              hours = '0'+hours;
          }
          var minutes = evt.addedRecords[0].StartTime.getMinutes();
          if(minutes < 10){
            minutes = '0'+minutes;
        }
          var localeTime = hours + ':' + minutes;
          var dataSvolgimentoAttivita = localeDate + ' ' + localeTime;
          console.log(dataSvolgimentoAttivita)  ;
          props.postPrenotazione(
              evt.addedRecords[0].NumPartecipanti,
              35*evt.addedRecords[0].NumPartecipanti,
              false,
              false,
              {
                  nome: evt.addedRecords[0].Subject,
                  recapitoTelefonico: evt.addedRecords[0].NumeroTelefonico
              },
              15,
              dataSvolgimentoAttivita,
              dataSvolgimentoAttivita,
              {
                id: 3,
                nome: "Rafting",
                costo: 40.0,
                tipologia: "Sportiva",
                image: "image",
                descrizione: "il rafting è un'attivita che si svolge lungo il fiume aventino a civitella.",
                luogo: "Civitella,CH"
              }
          )
      }
  }
    
  
  return (
    <div>
    <ScheduleComponent
      editorTemplate={editorWindowTemplate}
      startHour="09:00"
      endHour="16:00"
      locale="it-CH"
      eventSettings={{ dataSource: data }}
      actionBegin={onActionBegin}
    >
      <ViewsDirective>
        <ViewDirective option="Day" displayName="OGGI" />
        <ViewDirective option="Week" displayName="SETTIMANA" />
        <ViewDirective option="Month" displayName="MESE" />
      </ViewsDirective>
      <Inject services={[Day, Week, Month]} />
    </ScheduleComponent>
    </div>
    
  );
}

export default Home;
