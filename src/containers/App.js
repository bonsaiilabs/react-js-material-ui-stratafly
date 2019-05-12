import React, { Component } from 'react';
import AppHeader from '../components/AppHeader';
import { Theme } from '../Theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import Empty from './components/Empty';
import TravellerDialog from '../components/SearchForm/TravellerDialog';
import { defaultTravellers, testFlights } from '../shared/app-constants';
import SearchResults from '../components/SearchResults';
import SearchFormContainer from './SearchFormContainer';

const defaultState = {
  from: '',
  to: '',
  readOnlyFlights: [],
  departFlights: {},
  totalTravellers: 1,
  isRoundTrip: true
};

class App extends Component {
  state = defaultState;

  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <AppHeader />
        <SearchFormContainer onSearch={() => console.log('Found new flights')} />
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
        {/*<Empty />*/}
        <SearchResults flights={testFlights} onSelect={() => console.log('flight-selected')} />
      </MuiThemeProvider>
    );
  }
}
export default App;
