import { Grid } from '@material-ui/core';
import { FlightTimesAndCode } from '../../FlightTimesAndCode';
import { StopDurationAirline } from '../../../SearchResults/Flights/Flight/StopDurationAirline';
import React from 'react';

export const Summary = ({ from, to, flight, classes, stop }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <FlightTimesAndCode
          depart={flight.depart}
          arrive={flight.arrive}
          fromCode={from}
          toCode={to}
          classes={classes}
        />
      </Grid>

      <Grid item xs={12} className={classes.stopDurationAirline}>
        <StopDurationAirline stop={stop} duration={flight.totalTime} airline={flight.airline} classes={classes} />
      </Grid>
    </Grid>
  );
};
