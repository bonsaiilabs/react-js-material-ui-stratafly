import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import { Theme } from './Theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import SearchForm from './components/SearchForm';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <AppHeader />
        <SearchForm
          selectedRadio="round-trip"
          onChangeRadio={() => console.log('change trip type')}
          onClickTraveller={() => console.log('Clicked Traveller')}
          totalTravellers="1"
        />
      </MuiThemeProvider>
    );
  }
}
export default App;
