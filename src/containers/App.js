import React, { Component } from 'react';
import AppHeader from '../components/AppHeader';
import { Theme } from '../Theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { SearchResults } from '../components/SearchResults';
import SearchFormContainer from './SearchFormContainer';
import { isArrayEmpty, isObjectEmpty } from '../shared/util';
import { filterEconomyFlights } from '../shared/flightSearch';
import { updateFlightsWithPrices } from '../shared/flightSearch';
import { StrataFullScreenDialog } from '../components/Common/StrataFullScreenDialog';
import { ReviewSelection } from '../components/ReviewSelection';
import ReturnFlights from '../components/ReturnFlights';
import { trip } from '../shared/app-constants';
import { PaymentContainer } from './PaymentContainer';
import {Empty} from "../components/Empty";
import {Confirmation} from "../components/Confirmation";

const appScreens = {
  showSearch: false,
  showReview: false,
  showReturnFlights: false,
  showBooking: false
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
    const from = !isArrayEmpty(results) ? results[0].from : '';
    const to = !isArrayEmpty(results) ? results[0].to : '';
    const economyDepartFlights = filterEconomyFlights(results[0] || {});
    const economyReturnFlights = filterEconomyFlights(results[1] || {});
    const departFlights = updateFlightsWithPrices(economyDepartFlights || {}, totalTravellers);
    const returnFlights = updateFlightsWithPrices(economyReturnFlights || {}, totalTravellers);
    this.setState({ from, to, isRoundTrip, totalTravellers, departFlights, returnFlights });
  };

  onSelectDepartFlight = flight => {
    if (this.state.isRoundTrip)
      this.setState({ selectedDepartFlight: flight, controlFlow: makeActive('showReturnFlights') });
    else this.setState({ selectedDepartFlight: flight, controlFlow: makeActive('showReview') });
  };

  backToSearch = () =>
    this.setState({ controlFlow: makeActive('showSearch'), selectedDepartFlight: {}, selectedReturnFlight: {} });

  onSelectReturnFlight = flight => {
    this.setState({ selectedReturnFlight: flight, controlFlow: makeActive('showReview') });
  };

  onBook = () => this.setState({ controlFlow: makeActive('showBooking') });

  backToReview = () => this.setState({ controlFlow: makeActive('showReview') });

  onMakePayment = () => this.setState({ controlFlow: makeActive('showConfirm') });

  onBookAnotherFlight = () => this.setState(defaultState);

  render() {
    const {
      from,
      to,
      departFlights,
      returnFlights,
      selectedDepartFlight,
      selectedReturnFlight,
      totalTravellers,
      isRoundTrip
    } = this.state;

    const { showReturnFlights, showReview, showBooking, showConfirm } = this.state.controlFlow;
    const showEmpty = isObjectEmpty(departFlights);
    const totalPrice = isRoundTrip
      ? selectedDepartFlight.price + selectedReturnFlight.price
      : selectedDepartFlight.price;

    return (
      <MuiThemeProvider theme={Theme}>
        {!showConfirm && (
          <>
            <AppHeader />
            <SearchFormContainer onSearch={this.onSearch} />
            {showEmpty && <Empty />}
            {!showEmpty && <SearchResults flights={departFlights} onSelect={this.onSelectDepartFlight} />}
          </>
        )}

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

        <StrataFullScreenDialog open={showReturnFlights} onBack={this.backToSearch} label={'Return flights'}>
          <ReturnFlights
            from={from}
            to={to}
            flight={selectedDepartFlight}
            onClose={this.backToSearch}
            returnFlights={returnFlights}
            onSelectFlight={this.onSelectReturnFlight}
          />
        </StrataFullScreenDialog>

        <StrataFullScreenDialog open={showBooking} onBack={this.backToReview} label={'Payment'}>
          <PaymentContainer onMakePayment={this.onMakePayment} />
        </StrataFullScreenDialog>

        {showConfirm && (
          <>
            <AppHeader />
            <Confirmation onClick={this.onBookAnotherFlight} />
          </>
        )}
      </MuiThemeProvider>
    );
  }
}
export default App;
