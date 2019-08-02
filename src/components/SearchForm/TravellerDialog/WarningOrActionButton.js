import React from 'react';
import { infantAloneWarning, maxTravellersWarning } from '../../../shared/app-constants';
import { Grid, Typography, Button } from '@material-ui/core';

export const WarningOrActionButton = props => {
  const { showMaxWarning, showInfantWarning, onCancel, onDone } = props;
  const showWarning = showMaxWarning || showInfantWarning;
  if (!showWarning) return <CancelDone onCancel={onCancel} onDone={onDone} />;

  if (showMaxWarning) return <TravellerWarning warning={maxTravellersWarning} />;

  if (showInfantWarning) return <TravellerWarning warning={infantAloneWarning} />;
};

const CancelDone = props => {
  let { onCancel, onDone } = props;
  return (
    <Grid container justify="space-around">
      <Grid item>
        <Button color="secondary" onClick={onCancel}>
          CANCEL
        </Button>
      </Grid>
      <Grid item>
        <Button color="secondary" onClick={onDone}>
          DONE
        </Button>
      </Grid>
    </Grid>
  );
};

const TravellerWarning = props => {
  let { warning } = props;
  return (
    <Grid container justify="space-around">
      <Grid item>
        <Typography variant="subtitle2" color="error">
          {warning}
        </Typography>
      </Grid>
    </Grid>
  );
};
