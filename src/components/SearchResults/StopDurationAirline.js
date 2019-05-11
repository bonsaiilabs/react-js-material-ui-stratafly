import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export const StopDurationAirline = props => {
  const { classes, stop, duration, airline } = props;
  return (
    <Grid container direction="row" className={classes.stopDurationAirline} spacing={8}>
      <Grid item>
        <Typography variant="body2" className={classes.infoText}>
          {stop}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" className={classes.infoText}>
          {duration}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" className={classes.infoText}>
          {airline}
        </Typography>
      </Grid>
    </Grid>
  );
};
