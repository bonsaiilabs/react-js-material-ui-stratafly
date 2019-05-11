import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

// TODO All the Typography here should be black body2 medium emphasis
function MetaData({ classes, stop, duration, airline }) {
  return (
    <Grid container direction="row" className={classes.root} spacing={8}>
      <Grid item>
        <Typography variant="body2">{stop}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">{duration}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">{airline}</Typography>
      </Grid>
    </Grid>
  );
}
const flightMetaDataStyles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit
  }
});
export const StopDurationAirline = withStyles(flightMetaDataStyles)(MetaData);
