import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import { Theme } from './Theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import SearchForm from './components/SearchForm';
import Empty from './components/Empty';
import { formatDate, isObjectEmpty } from './shared/util';
import TravellerDialog from './components/SearchForm/TravellerDialog';
import { defaultTravellers, testFlights } from './shared/app-constants';
import SearchResults from './components/SearchResults';

class App extends Component {
  state = { departFlights: testFlights };
  render() {
    let showEmpty = isObjectEmpty(this.state.departFlights);
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
          open={false}
          onClose={() => console.log('closingDialog')}
          onDone={() => console.log('Done')}
          personAgeCount={defaultTravellers}
          onAdd={() => console.log('Add travellers')}
          onRemove={() => console.log('Remove travellers')}
          showMaxWarning={false}
          showInfantWarning={false}
        />

        {showEmpty && <Empty />}
        {!showEmpty && <SearchResults flights={testFlights} onSelect={() => console.log('flight-selected')} />}
      </MuiThemeProvider>
    );
  }
}
export default App;
