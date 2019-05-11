import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import { Theme } from './Theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import SearchForm from './components/SearchForm';
import Empty from './components/Empty';
import { formatDate } from './shared/util';
import TravellerDialog from './components/SearchForm/TravellerDialog';
import { defaultTravellers } from './shared/app-constants';

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
          fromDate={formatDate(new Date())}
          toDate={formatDate(new Date())}
        />

        <TravellerDialog
          open={true}
          onClose={() => console.log('closingDialog')}
          onDone={() => console.log('Done')}
          personAgeCount={defaultTravellers}
          onAdd={() => console.log('Add travellers')}
          onRemove={() => console.log('Remove travellers')}
          showMaxWarning={false}
          showInfantWarning={false}
        />

        <Empty />
      </MuiThemeProvider>
    );
  }
}
export default App;
