import React from 'react';
import Grid from '@material-ui/core/Grid';
import { IconTimeAndPrice } from './IconTimeAndPrice';
import { StopDurationAirline } from './StopDurationAirline';
import {stops} from "../../shared/app-constants";

export const FlightCard = ({ flight, tripType, from, to, onSelect }) => {
  let stop = flight.stops === stops.nonStop ? stops.nonStop : stops.oneStop + ' at ' + flight.viaAirlineCode + '. ';
  return (
    <Grid container direction="row" spacing={8}>
      <Grid item xs={12} onClick={onSelect}>
        <IconTimeAndPrice
          depart={flight.depart}
          arrive={flight.arrive}
          fromCode={from}
          toCode={to}
          price={flight.price}
          tripType={tripType}
          airline={flight.airline}
        />
      </Grid>
      <Grid item xs={12}>
        <StopDurationAirline stop={stop} duration={flight.totalTime + '. '} airline={flight.airline} />
      </Grid>
    </Grid>
  );
};
