import React, { Component } from 'react';
import AppHeader from '../components/AppHeader';
import { Theme } from '../Theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import SearchResults from '../components/SearchResults';
import Empty from '../components/Empty';
import SearchFormContainer from './SearchFormContainer';
import { isArrayEmpty, isObjectEmpty } from '../shared/util';
import { updateFlightsWithPrices } from '../shared/flightSearch';
import { StrataFullScreenDialog } from '../components/Common/StrataFullScreenDialog';
import ReviewSelection from '../components/ReviewSelection';
import { trip } from '../shared/app-constants';

const appScreens = {
  showSearch: false,
  showReview: false,
  showReturnFlights: false
};
const makeActive = screen => Object.assign({}, appScreens, { [screen]: true });

const defaultState = {
  from: '',
  to: '',
  departFlights: {},
  returnFlights: {},
  totalTravellers: 1,
  isRoundTrip: true,
  selectedDepartFlight: {},
  selectedReturnFlight: {},
  controlFlow: makeActive('showSearch')
};

class App extends Component {
  state = defaultState;

  onSearch = (results, isRoundTrip, totalTravellers) => {
    let from = !isArrayEmpty(results) ? results[0].from : '';
    let to = !isArrayEmpty(results) ? results[0].to : '';
    let departFlights = updateFlightsWithPrices(results[0] || {}, totalTravellers);
    let returnFlights = updateFlightsWithPrices(results[1] || {}, totalTravellers);
    this.setState({ from, to, isRoundTrip, totalTravellers, departFlights, returnFlights });
  };

  onSelectDepartFlight = flight => {
    if (this.state.isRoundTrip)
      this.setState({ selectedDepartFlight: flight, controlFlow: makeActive('showReturnFlights') });
    else this.setState({ selectedDepartFlight: flight, controlFlow: makeActive('showReview') });
  };

  backToSearch = () =>
    this.setState({ controlFlow: makeActive('showSearch'), selectedDepartFlight: {}, selectedReturnFlight: {} });

  // onSelectReturnFlight = flight => {
  //   this.setState({ selectedReturnFlight: flight, controlFlow: makeActive('showReview') });
  // };

  onBook = () => this.setState({ controlFlow: makeActive('showBooking') });

  render() {
    const {
      from,
      to,
      departFlights,
      selectedDepartFlight,
      selectedReturnFlight,
      totalTravellers,
      isRoundTrip
    } = this.state;
    const { showReview } = this.state.controlFlow;
    const showEmpty = isObjectEmpty(departFlights);
    const totalPrice = isRoundTrip
      ? selectedDepartFlight.price + selectedReturnFlight.price
      : selectedDepartFlight.price;

    return (
      <MuiThemeProvider theme={Theme}>
        <AppHeader />
        <SearchFormContainer onSearch={this.onSearch} />
        {showEmpty && <Empty />}
        {!showEmpty && <SearchResults flights={departFlights} onSelect={this.onSelectDepartFlight} />}
        <StrataFullScreenDialog open={showReview} onBack={this.backToSearch} label={'Review'}>
          <ReviewSelection
            from={from}
            to={to}
            departFlight={selectedDepartFlight}
            returnFlight={selectedReturnFlight}
            tripType={isRoundTrip ? trip.roundTrip : trip.oneWay}
            traveller={totalTravellers + ' Traveller'}
            totalPrice={totalPrice}
            onClose={this.backToSearch}
            onBook={this.onBook}
          />
        </StrataFullScreenDialog>
      </MuiThemeProvider>
    );
  }
}
export default App;
