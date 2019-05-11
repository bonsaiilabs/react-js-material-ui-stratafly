import React from 'react';
import Card from '@material-ui/core/Card';
import withStyles from '@material-ui/core/styles/withStyles';
import FlightTakeOffIcon from '@material-ui/icons/FlightTakeoffOutlined';
import SortByIcon from '@material-ui/icons/SwapVert';
import ResultHeader from '../Common/ResultHeader';
import { FlightCard } from './FlightCard';
import Divider from '@material-ui/core/Divider';

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
          <Flight key={index} flight={flight} tripType={tripType} from={from} to={to} onSelect={onSelect} />
        ))}
      </Card>
    </>
  );
};
const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: theme.shape.borderRadius * 2
  }
});
export default withStyles(styles)(SearchResults);

const Flight = ({ flight, tripType, from, to, onSelect }) => {
  return (
    <div onClick={() => onSelect(flight)}>
      <FlightCard flight={flight} tripType={tripType} from={from} to={to} />
      <Divider />
    </div>
  );
};
