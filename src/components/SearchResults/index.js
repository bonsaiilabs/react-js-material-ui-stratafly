import React from 'react';
import FlightTakeOffIcon from '@material-ui/icons/FlightTakeoffOutlined';
import SortByIcon from '@material-ui/icons/SwapVert';
import { ResultHeader } from '../Common/ResultHeader';
import { Flights } from './Flights';
import { makeStyles } from '@material-ui/core/styles';

export const SearchResults = ({ flights, onSelect, headerLabel }) => {
  const { from, to, flightsWithFares } = flights;
  const classes = useStyles();
  return (
    <>
      <ResultHeader
        icon1={<FlightTakeOffIcon color={'secondary'} />}
        text={headerLabel || 'Departure flights'}
        icon2={<SortByIcon color={'secondary'} />}
      />
      <Flights
        flightsWithFares={flightsWithFares || []}
        from={from}
        to={to}
        onSelect={onSelect}
        classes={classes}
      />
    </>
  );
};

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: theme.shape.borderRadius * 2
  },
  iconTimePrice: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  },
  airlineImageContainer: { height: '100%', width: '100%' },
  airlineImage: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
  stopDurationAirline: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2)
  },
  body2MediumEmphasis: {
    color: theme.palette.text.primaryMediumEmphasis
  },
  flightTimesAndCode: {
    paddingLeft: theme.spacing(2)
  }
}));
