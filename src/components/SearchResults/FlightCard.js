import React from 'react';
import Grid from '@material-ui/core/Grid';
import { IconTimeAndPrice } from './IconTimeAndPrice';
import { stops } from '../../shared/app-constants';
import { StopDurationAirline } from './StopDurationAirline';

export const FlightCard = ({ flight, tripType, from, to, onSelect, classes }) => {
  let nonStop = stops.nonStop + ' . ';
  let oneStop = stops.oneStop + ' at ' + flight.viaAirlineCode + ' .';
  let stop = flight.stops === stops.nonStop ? nonStop : oneStop;
  return (
    <Grid container direction="row" spacing={8}>
      <Grid item xs={12} onClick={onSelect}>
        <IconTimeAndPrice
          depart={flight.depart}
          arrive={flight.arrive}
          fromCode={from}
          toCode={to}
          price={flight.price}
          airline={flight.airline}
          classes={classes}
        />
      </Grid>

        <Grid item xs={12}>
        <StopDurationAirline
          stop={stop}
          duration={flight.totalTime + ' . '}
          airline={flight.airline}
          classes={classes}
        />
      </Grid>
    </Grid>
  );
};
