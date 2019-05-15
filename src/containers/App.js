import React, { Component } from 'react';
import AppHeader from '../components/AppHeader';
import { Theme } from '../Theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import SearchResults from '../components/SearchResults';
import Empty from '../components/Empty';
import SearchFormContainer from './SearchFormContainer';
import { isArrayEmpty, isObjectEmpty } from '../shared/util';
import {filterEconomyFlights, updateFlightsWithPrices} from '../shared/flightSearch';

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
    const economyDepartFlights = filterEconomyFlights(results[0] || {});
    const economyReturnFlights = filterEconomyFlights(results[1] || {});
    const departFlights = updateFlightsWithPrices(economyDepartFlights || {}, totalTravellers);
    const returnFlights = updateFlightsWithPrices(economyReturnFlights || {}, totalTravellers);
    this.setState({ from, to, isRoundTrip, totalTravellers, departFlights, returnFlights });
  };

  render() {
    let { departFlights } = this.state;
    let showEmpty = isObjectEmpty(departFlights);
    return (
      <MuiThemeProvider theme={Theme}>
        <AppHeader />
        <SearchFormContainer onSearch={this.onSearch} />
        {showEmpty && <Empty />}
        {!showEmpty && <SearchResults flights={departFlights} onSelect={() => console.log('flight-selected')} />}
      </MuiThemeProvider>
    );
  }
}
export default App;
