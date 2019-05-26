import React from 'react';
import { SearchResults } from '../../components/SearchResults';
import { FlightDetailCard } from '../Common/FlightDetailCard';
import { makeStyles, Grid } from '@material-ui/core';

export const ReturnFlights = ({
  classes = useStyles(),
  from,
  to,
  flight,
  onClose,
  tripType,
  returnFlights,
  onSelectFlight
}) => {
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

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(8)
  },
  margin: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));
