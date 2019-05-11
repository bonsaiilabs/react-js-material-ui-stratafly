import React from 'react';
import Grid from '@material-ui/core/Grid';
import { IconTimeAndPrice } from './IconTimeAndPrice';
import { stops } from '../../shared/app-constants';
import { StopDurationAirline } from './StopDurationAirline';

export const FlightCard = props => {
  const { flight, tripType, from, to, onSelect, classes } = props;
  let nonStop = stops.nonStop + ' . ';
  let oneStop = stops.oneStop + ' at ' + flight.viaAirlineCode + ' .';
  let stop = flight.stops === stops.nonStop ? nonStop : oneStop;
  return (
    <Grid container spacing={8}>
      <Grid item xs={12} onClick={onSelect}>
        <IconTimeAndPrice
          depart={flight.depart}
          arrive={flight.arrive}
          fromCode={from}
          toCode={to}
          price={flight.price}
          tripType={tripType}
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
