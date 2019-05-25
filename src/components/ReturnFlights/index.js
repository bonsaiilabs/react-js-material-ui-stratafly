import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { SearchResults } from '../../components/SearchResults';
import {FlightDetailCard} from "../Common/FlightDetailCard";

const ReturnFlights = ({ classes, from, to, flight, onClose, tripType, returnFlights, onSelectFlight }) => {
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.margin}>
        <FlightDetailCard from={from} to={to} flight={flight} onClose={onClose} headerName={'Departure flight'} />
      </Grid>
      <Grid item>
        <SearchResults
          tripType={tripType}
          flights={returnFlights}
          onSelect={onSelectFlight}
          headerLabel={'Return flights'}
        />
      </Grid>
    </Grid>
  );
};

const styles = theme => ({
  root: { marginTop: theme.spacing.unit * 8 },
  margin: { marginLeft: theme.spacing.unit, marginRight: theme.spacing.unit }
});

export default withStyles(styles)(ReturnFlights);
