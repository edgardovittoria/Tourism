import React, { Component } from 'react';
import logo from './logo.svg';
import Main from "./components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { loadCldr} from '@syncfusion/ej2-base';

const store = ConfigureStore();
loadCldr(
  require('cldr-data/supplemental/numberingSystems.json'),
  require('cldr-data/main/it-CH/ca-gregorian.json'),
  require('cldr-data/main/it-CH/numbers.json'),
  require('cldr-data/main/it-CH/timeZoneNames.json')
)


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

