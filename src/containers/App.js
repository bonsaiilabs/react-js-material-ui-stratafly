import React, { Component } from 'react';
import { AppHeader } from '../components/AppHeader';
import { Theme } from '../Theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { SearchResults } from '../components/SearchResults';
import SearchFormContainer from './SearchFormContainer';
import { isArrayEmpty, isObjectEmpty } from '../shared/util';
import { Empty } from '../components/Empty';
import { Desktop } from '../components/Desktop';
import { TravellerDialog } from '../components/SearchForm/TravellerDialog';
import { defaultTravellers } from '../shared/app-constants';

const defaultState = {
  from: '',
  to: '',
  departFlights: {},
  returnFlights: {},
  totalTravellers: 1,
  isRoundTrip: true,
};

class App extends Component {
  state = defaultState;

  onSearch = (results, isRoundTrip, totalTravellers) => {
    console.log(results)
    const from = !isArrayEmpty(results) ? results[0].from : '';
    const to = !isArrayEmpty(results) ? results[0].to : '';
    const departFlights = results[0] || {};
    const returnFlights = results[1] || {};
    console.log(results);
    this.setState({ from, to, isRoundTrip, totalTravellers, departFlights, returnFlights });
  };


  render() {
    if (window.screen.width >= 1024 && window.screen.height >= 768) return <Desktop />;
    const { departFlights } = this.state;
    const showEmpty = isObjectEmpty(departFlights);

    return (
      <MuiThemeProvider theme={Theme}>
        <>
          <AppHeader />
          <SearchFormContainer onSearch={this.onSearch} />
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
          {!showEmpty && <SearchResults flights={departFlights} onSelect={() => console.log('flight-selected')} />}
        </>
      </MuiThemeProvider>
    );
  }
}
export default App;
