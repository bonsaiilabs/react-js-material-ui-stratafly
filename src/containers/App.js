import React, { Component } from 'react';
import { AppHeader } from '../components/AppHeader';
import { Theme } from '../Theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { SearchResults } from '../components/SearchResults';
import SearchFormContainer from './SearchFormContainer';
import { isArrayEmpty, isObjectEmpty } from '../shared/util';
import { filterEconomyFlights } from '../shared/flightSearch';
import { updateFlightsWithPrices } from '../shared/flightSearch';
import { trip } from '../shared/app-constants';
import { Empty } from '../components/Empty';
import { Desktop } from '../components/Desktop';

const defaultState = {
  from: '',
  to: '',
  departFlights: {},
  returnFlights: {},
  totalTravellers: 1,
  isRoundTrip: true,
  selectedDepartFlight: {},
  selectedReturnFlight: {}
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

  //TODO: Refactor this later
  onSelectDepartFlight = flight => {
    if (this.state.isRoundTrip)
      this.setState({ selectedDepartFlight: flight, controlFlow: makeActive('showReturnFlights') });
    else this.setState({ selectedDepartFlight: flight, controlFlow: makeActive('showReview') });
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
          {!showEmpty && <SearchResults flights={departFlights} onSelect={this.onSelectDepartFlight} />}
        </>
      </MuiThemeProvider>
    );
  }
}
export default App;
