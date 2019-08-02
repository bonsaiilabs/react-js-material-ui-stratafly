import React from 'react';
import Grid from '@material-ui/core/Grid';
import { OneWayDate, RoundTripDates } from './TripDates';
import DateIcon from '@material-ui/icons/EventOutlined';

export const FromAndToDate = props => {
  let { selectedRadio, fromDate, onFromDateChange, toDate, onToDateChange, classes } = props;
  if (selectedRadio === 'one-way') {
    return (
      <Grid container>
        <Grid item xs={12} className={classes.textFields}>
          <OneWayDate
            fromDate={fromDate}
            onFromDateChange={onFromDateChange}
            icon={<DateIcon className={classes.textFieldIcon} />}
          />
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container>
        <Grid item xs={12} className={classes.textFields}>
          <RoundTripDates
            fromDate={fromDate}
            toDate={toDate}
            onFromDateChange={onFromDateChange}
            onToDateChange={onToDateChange}
            icon={<DateIcon className={classes.textFieldIcon} />}
          />
        </Grid>
      </Grid>
    );
  }
};
