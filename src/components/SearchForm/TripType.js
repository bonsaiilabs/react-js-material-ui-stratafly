import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { FormControl, RadioGroup } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { trip } from '../../Shared/app-constants';
import { Subtitle2White } from '../Common/Typographies';

const TripType = props => {
  const { classes, selectedRadio, onChangeRadio } = props;
  let isOne = selectedRadio === 'one-way';
  let isRound = selectedRadio === 'round-trip';
  return (
    <FormControl component="fieldset">
      <RadioGroup value={selectedRadio} onChange={onChangeRadio} row>
        <FormControlLabel
          value="round-trip"
          label={<Subtitle2White>{trip.roundTrip}</Subtitle2White>}
          control={<Radio checked={isRound} classes={{ root: classes.root, checked: classes.checked }} />}
        />

        <FormControlLabel
          value="one-way"
          label={<Subtitle2White>{trip.oneWay}</Subtitle2White>}
          control={<Radio checked={isOne} classes={{ root: classes.root, checked: classes.checked }} />}
        />
      </RadioGroup>
    </FormControl>
  );
};

const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    '&$checked': {
      color: theme.palette.common.white
    }
  },
  checked: {},
  label: { color: theme.palette.common.white }
});

export default withStyles(styles)(TripType);
