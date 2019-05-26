import React from 'react';
import { RadioGroup, Radio, Typography, FormControlLabel } from '@material-ui/core';
import { trip } from '../../../shared/app-constants';

export const TripType = props => {
  const { selectedRadio, onChangeRadio } = props;
  let isOneWay = selectedRadio === 'one-way';
  return (
    <RadioGroup value={selectedRadio} onChange={onChangeRadio} row>
      <FormControlLabel
        value="round-trip"
        label={
          <Typography variant={'subtitle1'} color="textSecondary">
            {trip.roundTrip}
          </Typography>
        }
        control={<Radio checked={!isOneWay} color="default" />}
      />
      <FormControlLabel
        value="one-way"
        label={
          <Typography variant={'subtitle1'} color="textSecondary">
            {trip.oneWay}
          </Typography>
        }
        control={<Radio checked={isOneWay} color="default" />}
      />
    </RadioGroup>
  );
};
