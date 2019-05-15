import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export const StopDurationAirline = props => {
  const { classes, stop, duration, airline } = props;
  return (
    <Grid container direction="row" className={classes.stopDurationAirline} spacing={8}>
      <Grid item>
        <Typography variant="body2" className={classes.body2MediumEmphasis}>
          {stop}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" className={classes.body2MediumEmphasis}>
          {duration}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" className={classes.body2MediumEmphasis}>
          {airline}
        </Typography>
      </Grid>
    </Grid>
  );
};
