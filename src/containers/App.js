import React, { Component } from 'react';
import { AppHeader } from '../components/AppHeader';
import { Theme } from '../Theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { SearchResults } from '../components/SearchResults';
import SearchFormContainer from './SearchFormContainer';
import { isArrayEmpty, isObjectEmpty } from '../shared/util';
import { updateFlightsWithPrices } from '../shared/flightSearch';
import { StrataFullScreenDialog } from '../components/Common/StrataFullScreenDialog';
import { ReviewSelection } from '../components/ReviewSelection';
import { trip } from '../shared/app-constants';
import { Empty } from '../components/Empty';
import { Desktop } from '../components/Desktop';

const appScreens = {
  showSearch: false,
  showReview: false
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
  controlFlow: makeActive('showSearch')
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

  onSelectDepartFlight = flight => {
    this.setState({ selectedDepartFlight: flight, controlFlow: makeActive('showReview') });
  };

  backToSearch = () =>
    this.setState({ controlFlow: makeActive('showSearch'), selectedDepartFlight: {}});

  render() {
    if (window.screen.width >= 1024 && window.screen.height >= 768) return <Desktop />;
    const {
      from,
      to,
      departFlights,
      selectedDepartFlight,
      totalTravellers,
      isRoundTrip
    } = this.state;

    const { showReview } = this.state.controlFlow;
    const showEmpty = isObjectEmpty(departFlights);
    const totalPrice = selectedDepartFlight.price;

    return (
      <MuiThemeProvider theme={Theme}>
        <>
          <AppHeader />
          <SearchFormContainer onSearch={this.onSearch} />
          {showEmpty && <Empty />}
          {!showEmpty && <SearchResults flights={departFlights} onSelect={this.onSelectDepartFlight} />}
        </>

        <StrataFullScreenDialog open={showReview} onBack={this.backToSearch} label={'Review'}>
          <ReviewSelection
            from={from}
            to={to}
            departFlight={selectedDepartFlight}
            tripType={isRoundTrip ? trip.roundTrip : trip.oneWay}
            traveller={totalTravellers + ' Traveller'}
            totalPrice={totalPrice}
            onClose={this.backToSearch}
            onBook={() => console.log('Clicked BOOK')}
          />
        </StrataFullScreenDialog>
      </MuiThemeProvider>
    );
  }
}
export default App;
