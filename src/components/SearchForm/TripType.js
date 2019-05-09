import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { RadioGroup } from '@material-ui/core';
import { trip } from '../../shared/app-constants';
import { Subtitle1White } from '../Common/Typographies';

export const TripType = props => {
  const { selectedRadio, onChangeRadio } = props;
  let isOneWay = selectedRadio === 'one-way';
  return (
    <RadioGroup value={selectedRadio} onChange={onChangeRadio} row>
      <FormControlLabel
        value="round-trip"
        label={<Subtitle1White>{trip.roundTrip}</Subtitle1White>}
        control={<Radio checked={!isOneWay} color="default" />}
      />
      <FormControlLabel
        value="one-way"
        label={<Subtitle1White>{trip.oneWay}</Subtitle1White>}
        control={<Radio checked={isOneWay} color="default" />}
      />
    </RadioGroup>
  );
};
