import ArrowRight from '@material-ui/icons/ArrowRightAlt';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export const FlightTimesAndCode = props => {
  const { depart, arrive, fromCode, toCode, classes } = props;
  return (
    <Grid container direction="row" alignItems="center" spacing={8} className={classes.flightTimesAndCode}>
      <Grid item>
        <TimeAirportCode time={depart} airportCode={fromCode} classes={classes} />
      </Grid>
      <Grid item>
        <ArrowRight />
      </Grid>
      <Grid item>
        <TimeAirportCode time={arrive} airportCode={toCode} classes={classes} />
      </Grid>
    </Grid>
  );
};

const TimeAirportCode = props => {
  const { time, airportCode, classes } = props;
  return (
    <Grid container direction="column" spacing={8}>
      <Grid item>
        <Typography variant="subtitle2">{time}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" className={classes.body2MediumEmphasis}>
          {airportCode}
        </Typography>
      </Grid>
    </Grid>
  );
};
