import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { TripTypeAndTraveller } from './TripTypeAndTraveller';
import { FromAndToLocation } from './FromAndToLocation';
import { FromAndToDate } from './FromAndToDate';

const SearchForm = props => {
  const {
    classes,
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
  return (
    <Grid container className={classes.searchFormContainer}>
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
    </Grid>
  );
};

const styles = theme => ({
  searchFormContainer: {
    flexGrow: 1,
    background: theme.palette.primary[700],
    paddingTop: theme.spacing.unit * 8
  },
  tripTypeTraveller: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  textFields: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  textFieldIcon: { color: theme.palette.text.primaryMediumEmphasis }
});

export default withStyles(styles)(SearchForm);
