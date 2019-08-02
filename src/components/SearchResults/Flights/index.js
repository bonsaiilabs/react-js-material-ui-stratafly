import React from 'react';
import { Card, Divider } from '@material-ui/core';
import { Flight } from './Flight';

export const Flights = props => {
  const { flightsWithFares, from, to, onSelect, classes } = props;
  return (
    <Card raised={true} className={classes.card}>
      {flightsWithFares.map((flight, index) => (
        <div key={index}>
          <Flight flight={flight} from={from} to={to} onSelect={onSelect} classes={classes} />
          <Divider />
        </div>
      ))}
    </Card>
  );
};
