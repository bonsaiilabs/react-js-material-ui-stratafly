import React from 'react';
import { defaultTravellers, maxTravellersAllowed } from '../shared/app-constants';
import SearchForm from '../components/SearchForm';
import TravellerDialog from '../components/SearchForm/TravellerDialog';
import { getTotalCount, addCount, isInfantAlone, reduceCount, formatDate } from '../shared/util';

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
    const [year, month, day] = date.split('-');
    const fromDate = new Date(year, month - 1, day);
    this.setState({ fromDate: fromDate }, this.onChangeSearchCriteria);
  };

  onToDateChange = date => {
    const [year, month, day] = date.split('-');
    const toDate = new Date(year, month - 1, day);
    this.setState({ toDate: toDate }, this.onChangeSearchCriteria);
  };

  onChangeSearchCriteria = () => {
    console.log('Search Criteria changed');
  };

  onClickTraveller = () => {
    this.setState({ showTravellerDialog: true });
  };

  onAddTraveller = (count, type) => {
    let updated = addCount(this.state.draftTravellers, type, count, maxTravellersAllowed);
    let totalTravellers = getTotalCount(updated);
    if (totalTravellers > maxTravellersAllowed) {
      this.setState({ showMaxWarning: true, draftTravellers: updated });
    } else if (isInfantAlone(updated[2], updated[0])) {
      this.setState({ showInfantWarning: true, draftTravellers: updated });
    } else {
      this.setState({ draftTravellers: updated });
    }
  };

  onRemoveTraveller = (count, type) => {
    let updated = reduceCount(this.state.draftTravellers, type, count);
    let totalTravellers = getTotalCount(updated);
    if (totalTravellers <= maxTravellersAllowed && this.state.showMaxWarning) {
      this.setState({ showMaxWarning: false, draftTravellers: updated });
    } else if (!isInfantAlone(updated[2], updated[0]) && this.state.showInfantWarning) {
      this.setState({ showInfantWarning: false, draftTravellers: updated });
    } else {
      this.setState({ draftTravellers: updated });
    }
  };

  onCancelTravellerDialog = () => {
    this.setState(state => ({
      showTravellerDialog: false,
      draftTravellers: state.lastChosenTravellers
    }));
  };

  onDoneTravellerDialog = () => {
    let total = getTotalCount(this.state.draftTravellers);
    this.setState(
      state => ({
        showTravellerDialog: false,
        lastChosenTravellers: state.draftTravellers,
        totalTravellers: total
      }),
      this.onChangeSearchCriteria
    );
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
          fromDate={formatDate(this.state.fromDate)}
          toDate={formatDate(this.state.toDate)}
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
