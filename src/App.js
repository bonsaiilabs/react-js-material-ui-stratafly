import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import {Theme} from "./Theme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <AppHeader />
      </MuiThemeProvider>
    );
  }
}
export default App;
