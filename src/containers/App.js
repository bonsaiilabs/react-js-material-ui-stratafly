import React, { Component } from 'react';
import { AppHeader } from '../components/AppHeader';
import { Theme } from '../Theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { SearchResults } from '../components/SearchResults';
import SearchFormContainer from './SearchFormContainer';
import { isArrayEmpty, isObjectEmpty } from '../shared/util';
import { updateFlightsWithPrices } from '../shared/flightSearch';
import { Empty } from '../components/Empty';
import { Desktop } from '../components/Desktop';

const defaultState = {
  from: '',
  to: '',
  departFlights: {},
  returnFlights: {},
  totalTravellers: 1,
  isRoundTrip: true
};

class App extends Component {
  state = defaultState;

  onSearch = (results, isRoundTrip, totalTravellers) => {
    const from = !isArrayEmpty(results) ? results[0].from : '';
    const to = !isArrayEmpty(results) ? results[0].to : '';
    const departFlights = updateFlightsWithPrices(results[0] || {}, totalTravellers);
    const returnFlights = updateFlightsWithPrices(results[1] || {}, totalTravellers);
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
          {showEmpty && <Empty />}
          {!showEmpty && <SearchResults flights={departFlights} onSelect={() => console.log('flight-selected')} />}
        </>
      </MuiThemeProvider>
    );
  }
}
export default App;
