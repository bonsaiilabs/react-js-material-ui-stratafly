import { stops } from '../../../../shared/app-constants';
import { IconTimePrice } from './IconTimePrice';
import { StopDurationAirline } from './StopDurationAirline';
import React from 'react';
import Grid from '@material-ui/core/Grid';

export const Flight = props => {
  const { flight, from, to, onSelect, classes } = props;
  let nonStop = stops.nonStop;
  let oneStop = stops.oneStop + ' at ' + flight.viaAirlineCode;
  let stop = flight.stops === stops.nonStop ? nonStop : oneStop;
  return (
    <Grid container onClick={() => onSelect(flight)}>
      <Grid item xs={12}>
        <IconTimePrice fromCode={from} toCode={to} flight={flight} classes={classes} />
      </Grid>

      <Grid item xs={12}>
        <StopDurationAirline
          stop={stop}
          duration={flight.totalTime}
          airline={flight.airline}
          classes={classes}
        />
      </Grid>
    </Grid>
  );
};
