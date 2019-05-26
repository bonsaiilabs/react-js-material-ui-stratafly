import React from 'react';
import { Card, Divider } from '@material-ui/core';
import { FlightCard } from './FlightCard';

export const Flights = props => {
  const { flightsWithFares, tripType, from, to, onSelect, classes } = props;
  return (
    <Card raised={true} className={classes.card}>
      {flightsWithFares.map((flight, index) => (
        <div key={index}>
          <FlightCard flight={flight} tripType={tripType} from={from} to={to} onSelect={onSelect} classes={classes} />
          <Divider />
        </div>
      ))}
    </Card>
  );
};
