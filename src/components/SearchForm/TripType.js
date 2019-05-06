import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { FormControl, RadioGroup } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { trip } from '../Shared/app-constants';

const TripType = props => {
  const { classes, selectedRadio, onChangeRadio } = props;
  let isOne = selectedRadio === 'one-way';
  let isRound = selectedRadio === 'round-trip';
  return (
    <FormControl component="fieldset">
      <RadioGroup value={selectedRadio} onChange={onChangeRadio} row>
        <FormControlLabel
          value="round-trip"
          label={
            <Typography variant="subtitle2" className={classes.label}>
              {trip.roundTrip}
            </Typography>
          }
          control={<Radio checked={isRound} classes={{ root: classes.root, checked: classes.checked }} />}
        />

        <FormControlLabel
          value="one-way"
          label={
            <Typography variant="subtitle2" className={classes.label}>
              {trip.oneWay}
            </Typography>
          }
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
