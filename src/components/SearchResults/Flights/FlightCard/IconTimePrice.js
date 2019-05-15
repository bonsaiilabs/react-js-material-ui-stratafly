import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FlightTimesAndCode } from '../../../Common/FlightTimesAndCode';
import { Typography } from '@material-ui/core';
import { AirlineToIcon } from '../../../../shared/app-constants';

export const IconTimePrice = props => {
  const { fromCode, toCode, tripType, classes, flight } = props;
  return (
    <Grid container className={classes.iconTimePrice}>
      <Grid item xs={1}>
        <AirlineIcon airline={flight.airline} classes={classes} />
      </Grid>

      <Grid item xs={6}>
        <FlightTimesAndCode
          depart={flight.depart}
          arrive={flight.arrive}
          fromCode={fromCode}
          toCode={toCode}
          classes={classes}
        />
      </Grid>

      <Grid item xs={5}>
        <PriceTripType price={flight.price} tripType={tripType} classes={classes} />
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

export const PriceTripType = props => {
  const { price, tripType, classes } = props;
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="subtitle1" color="secondary">
          {'$' + price}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" className={classes.body2MediumEmphasis}>
          {tripType}
        </Typography>
      </Grid>
    </Grid>
  );
};
