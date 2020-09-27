import React from 'react';
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons"
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

export const editorWindowTemplate = (props) => {
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
          <tr>
            <td className="e-textlabel">Pagata</td>
            <td colSpan={4}>
              <CheckBoxComponent 
                id="pagata"
                data-name="pagata"
                className="e-field"
                checked={props.pagata}/>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Servizio Fotografico</td>
            <td colSpan={4}>
              <CheckBoxComponent 
                id="servizioFotografico"
                data-name="servizioFotografico"
                className="e-field"
                checked={props.servizioFotografico}/>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  