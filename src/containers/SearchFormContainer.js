import React from 'react';
import { SearchForm } from '../components/SearchForm';
import { oneWaySearch, roundTripSearch } from '../shared/flightSearch';
import { getDateToString, getStringToDate, isEmptyString } from '../shared/util';

export default class SearchFormContainer extends React.Component {
  state = {
    selectedRadio: 'round-trip',
    totalTravellers: 1,
    fromLocation: '',
    toLocation: '',
    fromDate: new Date(),
    toDate: new Date()
  };

  onChangeRadio = event => {
    this.setState({ selectedRadio: event.target.value }, this.onChangeSearchCriteria);
  };

  onChangeFromLocation = from => {
    this.setState({ fromLocation: from.toUpperCase() }, this.onChangeSearchCriteria);
  };

  onChangeToLocation = to => {
    this.setState({ toLocation: to.toUpperCase() }, this.onChangeSearchCriteria);
  };

  onFromDateChange = date => {
    this.setState({ fromDate: getStringToDate(date) }, this.onChangeSearchCriteria);
  };

  onToDateChange = date => {
    this.setState({ toDate: getStringToDate(date) }, this.onChangeSearchCriteria);
  };

  onChangeSearchCriteria = () => {
    const { fromDate, toDate, fromLocation, toLocation, selectedRadio, totalTravellers } = this.state;
    const isRoundTrip = selectedRadio === 'round-trip';
    if (isEmptyString(fromLocation) || isEmptyString(toLocation)) return;
    let flights = isRoundTrip
      ? roundTripSearch(fromLocation, toLocation, fromDate, toDate)
      : oneWaySearch(fromLocation, toLocation, fromDate);
    this.props.onSearch(flights, isRoundTrip, totalTravellers);
  };

  render() {
    return (
      <>
        <SearchForm
          selectedRadio={this.state.selectedRadio}
          onChangeRadio={this.onChangeRadio}
          totalTravellers={this.state.totalTravellers}
          onChangeFromLocation={this.onChangeFromLocation}
          onChangeToLocation={this.onChangeToLocation}
          fromLocation={this.state.fromLocation}
          toLocation={this.state.toLocation}
          fromDate={getDateToString(this.state.fromDate)}
          toDate={getDateToString(this.state.toDate)}
          onFromDateChange={this.onFromDateChange}
          onToDateChange={this.onToDateChange}
        />
      </>
    );
  }
}
