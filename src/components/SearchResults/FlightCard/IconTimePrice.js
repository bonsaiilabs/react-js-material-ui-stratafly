import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FlightTimesAndCode } from '../../Common/FlightTimesAndCode';
import { Typography } from '@material-ui/core';
import { AirlineToIcon } from '../../../shared/app-constants';

export const IconTimePrice = props => {
  const { depart, arrive, fromCode, toCode, price, tripType, airline, classes } = props;
  return (
    <Grid container className={classes.iconTimePrice}>
      <Grid item xs={1}>
        <AirlineIcon airline={airline} classes={classes} />
      </Grid>

      <Grid item xs={6}>
        <FlightTimesAndCode depart={depart} arrive={arrive} fromCode={fromCode} toCode={toCode} />
      </Grid>

      <Grid item xs={5}>
        <PriceTripType price={price} tripType={tripType} />
      </Grid>
    </Grid>
  );
};

export const AirlineIcon = props => {
  const { airline, classes } = props;
  let airlineIcon = AirlineToIcon[airline];
  return (
    <Grid container justify="center">
      <Grid item className={classes.airlineImageContainer}>
        <img src={airlineIcon} alt="airline" className={classes.airlineImage} />
      </Grid>
    </Grid>
  );
};

//tripType shoule be black body2 medium emphasis
export const PriceTripType = props => {
  const { price, tripType } = props;
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="subtitle1"> {'$' + price} </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">{tripType}</Typography>
      </Grid>
    </Grid>
  );
};
