import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import FlightTakeOffIcon from '@material-ui/icons/FlightTakeoffOutlined';
import SortByIcon from '@material-ui/icons/SwapVert';
import ResultHeader from '../Common/ResultHeader';
import { Flights } from './Flights';

const SearchResults = ({ classes, tripType, flights, onSelect, headerLabel }) => {
  const { from, to, flightsWithFares } = flights;
  return (
    <>
      <ResultHeader
        icon1={<FlightTakeOffIcon color={'secondary'} />}
        text={headerLabel || 'Departure flights'}
        icon2={<SortByIcon color={'secondary'} />}
      />
      <Flights
        flightsWithFares={flightsWithFares || []}
        tripType={tripType}
        from={from}
        to={to}
        onSelect={onSelect}
        classes={classes}
      />
    </>
  );
};
const styles = theme => ({
  card: {
    borderRadius: theme.shape.borderRadius * 2
  },
  iconTimePrice: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2
  },
  airlineImageContainer: { height: '100%', width: '100%' },
  airlineImage: { maxWidth: '100%', maxHeight: '100%' },
  stopDurationAirline: { padding: theme.spacing.unit },
  body2MediumEmphasis: { color: theme.palette.text.primaryMediumEmphasis },
  flightTimesAndCode: { paddingLeft: theme.spacing.unit * 2 }
});
export default withStyles(styles)(SearchResults);
