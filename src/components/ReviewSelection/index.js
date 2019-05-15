import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import RoundTripIcon from '@material-ui/icons/SwapHoriz';
import OneWayIcon from '@material-ui/icons/ArrowRightAlt';
import { FlightTitle } from './FlightTitle';
import { trip } from '../../shared/app-constants';
import { StrataButton } from '../Common/StrataButton';
import FlightSummaryCard from './FlightSummaryCard';
import FlightDetailCard from "../Common/FlightDetailCard";

const ReviewSelection = props => {
  const { classes, from, to, departFlight, returnFlight, tripType, traveller, totalPrice, onClose, onBook } = props;
  const isRoundTrip = tripType === trip.roundTrip;
  const showReturnFlight = Object.entries(returnFlight).length > 0;
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.titleContainer}>
        {isRoundTrip && <FlightTitle from={from} to={to} icon={<RoundTripIcon className={classes.icon} />} />}
        {!isRoundTrip && <FlightTitle from={from} to={to} icon={<OneWayIcon className={classes.icon} />} />}
      </Grid>

      <Grid item xs={12} className={classes.summaryCard}>
        <FlightSummaryCard
          totalPrice={totalPrice}
          tripType={tripType}
          flightClass={departFlight.class}
          traveller={traveller}
        />
      </Grid>

      <Grid item xs={12} className={classes.departCard}>
        <FlightDetailCard from={from} to={to} flight={departFlight} onClose={onClose} headerName={'Departure flight'} />
      </Grid>

      {showReturnFlight && (
        <Grid item xs={12} className={classes.returnCard}>
          <FlightDetailCard from={to} to={from} flight={returnFlight} onClose={onClose} headerName={'Return flight'} />
        </Grid>
      )}

      <Grid item xs={12} className={classes.button}>
        <Grid container justify="center">
          <Grid item>
            <StrataButton label={'BOOK'} onClick={onBook} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
const styles = theme => ({
  root: { marginTop: theme.spacing.unit * 8 },
  summaryCard: { margin: theme.spacing.unit },
  titleContainer: { margin: theme.spacing.unit },
  icon: { color: theme.palette.text.primaryMediumEmphasis },
  departCard: { marginTop: '-10px', marginLeft: theme.spacing.unit, marginRight: theme.spacing.unit },
  returnCard: { margin: theme.spacing.unit },
  button: { marginTop: theme.spacing.unit * 3 }
});
export default withStyles(styles)(ReviewSelection);
