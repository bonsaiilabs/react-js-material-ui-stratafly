import React from 'react';
import Grid from '@material-ui/core/Grid';
import RoundTripIcon from '@material-ui/icons/SwapHoriz';
import OneWayIcon from '@material-ui/icons/ArrowRightAlt';
import { FlightSummaryCard } from './FlightSummaryCard';
import withStyles from '@material-ui/core/styles/withStyles';
import { FlightTitle } from './FlightTitle';
import { trip } from '../../shared/app-constants';
import { StrataButton } from '../Common/StrataButton';
import { FlightDetailCard } from '../Common/FlightDetailCard';

function ReviewFlights({
  classes,
  from,
  to,
  departFlight,
  returnFlight,
  tripType,
  traveller,
  totalPrice,
  onClose,
  onBook
}) {
  let isRoundTrip = tripType === trip.roundTrip;
  let showReturnFlight = Object.entries(returnFlight).length > 0;
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.titleContainer}>
        {isRoundTrip && <FlightTitle from={from} to={to} icon={<RoundTripIcon className={classes.icon} />} />}
        {!isRoundTrip && <FlightTitle from={from} to={to} icon={<OneWayIcon className={classes.icon} />} />}
      </Grid>

      <Grid item xs={12}>
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
}
const styles = theme => ({
  root: { marginTop: theme.spacing.unit * 8 },
  titleContainer: { margin: theme.spacing.unit },
  icon: { color: theme.palette.text.primaryMediumEmphasis },
  departCard: { marginTop: '-10px', marginLeft: theme.spacing.unit, marginRight: theme.spacing.unit },
  returnCard: { margin: theme.spacing.unit },
  button: { marginTop: theme.spacing.unit * 3 }
});
export const ReviewSelection = withStyles(styles)(ReviewFlights);
