import React, { Component } from 'react';
import AppHeader from '../components/AppHeader';
import { Theme } from '../Theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TravellerDialog from '../components/SearchForm/TravellerDialog';
import { defaultTravellers, testFlights } from '../shared/app-constants';
import SearchResults from '../components/SearchResults';
import Empty from '../components/Empty';
import SearchFormContainer from './SearchFormContainer';
import {isObjectEmpty} from "../shared/util";

const defaultState = {
  from: '',
  to: '',
  readOnlyFlights: [],
  departFlights: { randomData: true },
  totalTravellers: 1,
  isRoundTrip: true
};

class App extends Component {
  state = defaultState;

  render() {
    let showEmpty = isObjectEmpty(this.state.departFlights);

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
        {showEmpty && <Empty />}
        {!showEmpty && <SearchResults flights={testFlights} onSelect={() => console.log('flight-selected')} />}
      </MuiThemeProvider>
    );
  }
}
export default App;
