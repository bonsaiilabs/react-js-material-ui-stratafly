import ArrowRight from '@material-ui/icons/ArrowRightAlt';
import React from 'react';
import { Typography, Grid } from '@material-ui/core';

export const FlightTimesAndCode = props => {
  const { depart, arrive, fromCode, toCode, classes } = props;
  return (
    <Grid container alignItems="center" spacing={1} className={classes.flightTimesAndCode}>
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

export const TimeAirportCode = props => {
  const { time, airportCode, classes } = props;
  return (
    <Grid container direction="column" spacing={1}>
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
