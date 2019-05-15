import { Grid } from '@material-ui/core';
import { FlightTimesAndCode } from '../../FlightTimesAndCode';
import { StopDurationAirline } from '../../../SearchResults/Flights/FlightCard/StopDurationAirline';
import React from 'react';

export const Summary = ({ from, to, flight, classes, stop }) => {
  return (
    <Grid container direction="column" alignItems="flex-start">
      <Grid item>
        <FlightTimesAndCode
          depart={flight.depart}
          arrive={flight.arrive}
          fromCode={from}
          toCode={to}
          classes={classes}
        />
      </Grid>

      <Grid item>
        <StopDurationAirline stop={stop} duration={flight.totalTime + '.'} airline={flight.airline} classes={classes} />
      </Grid>
    </Grid>
  );
};
