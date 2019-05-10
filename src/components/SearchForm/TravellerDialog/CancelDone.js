import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export const CancelDone = props => {
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
