import React from 'react';
import Card from '@material-ui/core/Card';
import withStyles from '@material-ui/core/styles/withStyles';
import FlightTakeOffIcon from '@material-ui/icons/FlightTakeoffOutlined';
import SortByIcon from '@material-ui/icons/SwapVert';
import ResultHeader from '../Common/ResultHeader';
import Divider from '@material-ui/core/Divider';
import { FlightCard } from './FlightCard';

const SearchResults = ({ classes, tripType, flights, onSelect, headerLabel }) => {
  let from = flights.from,
    to = flights.to,
    flightsWithFares = flights.flightsWithFares || [];
  return (
    <>
      <ResultHeader
        icon1={<FlightTakeOffIcon color={'secondary'} />}
        text={headerLabel || 'Departure flights'}
        icon2={<SortByIcon color={'secondary'} />}
      />
      <Card raised={true} className={classes.root}>
        {flightsWithFares.map((flight, index) => (
          <div key={index}>
            <FlightCard flight={flight} tripType={tripType} from={from} to={to} onSelect={onSelect} classes={classes} />
            <Divider />
          </div>
        ))}
      </Card>
    </>
  );
};
const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: theme.shape.borderRadius * 2
  },
  iconTimePrice: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2
  },
  airlineImageContainer: { height: '100%', width: '100%' },
  airlineImage: { maxWidth: '100%', maxHeight: '100%' },
  stopDurationAirline: { padding: theme.spacing.unit },
  infoText: { color: theme.palette.text.primaryMediumEmphasis }
});
export default withStyles(styles)(SearchResults);
