import React from 'react';
import { FromAndToLocation } from './FromAndToLocation';
import { FromAndToDate } from './FromAndToDate';
import { TripTypeAndTraveller } from './TripTypeAndTraveller';
import { makeStyles } from '@material-ui/core/styles';

export const SearchForm = props => {
  const {
    selectedRadio,
    onChangeRadio,
    onClickTraveller,
    totalTravellers,
    fromLocation,
    onChangeFromLocation,
    toLocation,
    onChangeToLocation,
    fromDate,
    toDate,
    onFromDateChange,
    onToDateChange
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.searchFormContainer}>
      <TripTypeAndTraveller
        selectedRadio={selectedRadio}
        onChangeRadio={onChangeRadio}
        onClickTraveller={onClickTraveller}
        totalTravellers={totalTravellers}
        classes={classes}
      />

      <FromAndToLocation
        fromLocation={fromLocation}
        onChangeFromLocation={onChangeFromLocation}
        toLocation={toLocation}
        onChangeToLocation={onChangeToLocation}
        classes={classes}
      />

      <FromAndToDate
        selectedRadio={selectedRadio}
        fromDate={fromDate}
        onFromDateChange={onFromDateChange}
        toDate={toDate}
        onToDateChange={onToDateChange}
        classes={classes}
      />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  searchFormContainer: {
    flexGrow: 1,
    background: theme.palette.primary[700],
    paddingTop: theme.spacing(8)
  },
  tripTypeTraveller: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  textFields: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  textFieldIcon: { color: theme.palette.text.secondaryMediumEmphasis },
  travellerIcon: { color: theme.palette.text.secondary }
}));
