import React from 'react';
import {defaultTravellers, maxTravellersAllowed} from '../shared/app-constants';
import { SearchForm } from '../components/SearchForm';
import { TravellerDialog } from '../components/SearchForm/TravellerDialog';
import { oneWaySearch, roundTripSearch } from '../shared/flightSearch';
import {
  getTotalTravellers,
  increaseAndUpdateTravellers,
  isInfantAlone,
  reduceAndUpdateTravellers,
  getDateToString,
  getStringToDate,
  isEmptyString
} from '../shared/util';

export default class SearchFormContainer extends React.Component {
  state = {
    selectedRadio: 'round-trip',
    totalTravellers: 1,
    showTravellerDialog: false,
    lastChosenTravellers: defaultTravellers,
    draftTravellers: defaultTravellers,
    showMaxWarning: false,
    showInfantWarning: false,
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

  onClickTraveller = () => {
    this.setState({ showTravellerDialog: true });
  };

  onAddTraveller = (count, travellerType) => {
    let draftTravellers = increaseAndUpdateTravellers(
      this.state.draftTravellers,
      travellerType,
      count,
      maxTravellersAllowed
    );
    let totalTravellers = getTotalTravellers(draftTravellers);
    if (totalTravellers > maxTravellersAllowed) this.setState({ showMaxWarning: true, draftTravellers });
    else if (isInfantAlone(draftTravellers[2], draftTravellers[0]))
      this.setState({ showInfantWarning: true, draftTravellers });
    else this.setState({ draftTravellers });
  };

  onRemoveTraveller = (count, travellerType) => {
    let draftTravellers = reduceAndUpdateTravellers(this.state.draftTravellers, travellerType, count);
    let totalTravellers = getTotalTravellers(draftTravellers);
    if (totalTravellers <= maxTravellersAllowed && this.state.showMaxWarning)
      this.setState({ showMaxWarning: false, draftTravellers });
    else if (!isInfantAlone(draftTravellers[2], draftTravellers[0]) && this.state.showInfantWarning)
      this.setState({ showInfantWarning: false, draftTravellers });
    else this.setState({ draftTravellers });
  };

  onCancelTravellerDialog = () => {
    this.setState(state => ({
      showTravellerDialog: false,
      draftTravellers: state.lastChosenTravellers,
      showMaxWarning: false,
      showInfantWarning: false
    }));
  };

  onDoneTravellerDialog = () => {
    this.setState(
      state => ({
        showTravellerDialog: false,
        lastChosenTravellers: state.draftTravellers,
        totalTravellers: getTotalTravellers(state.draftTravellers)
      }),
      this.onChangeSearchCriteria
    );
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
          onClickTraveller={this.onClickTraveller}
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
        {this.state.showTravellerDialog && (
          <TravellerDialog
            open={this.state.showTravellerDialog}
            onClose={this.onCancelTravellerDialog}
            onDone={this.onDoneTravellerDialog}
            personAgeCount={this.state.draftTravellers}
            onAdd={this.onAddTraveller}
            onRemove={this.onRemoveTraveller}
            showMaxWarning={this.state.showMaxWarning}
            showInfantWarning={this.state.showInfantWarning}
          />
        )}
      </>
    );
  }
}
