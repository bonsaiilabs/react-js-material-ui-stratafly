// import withStyles from '@material-ui/core/styles/withStyles';
import ArrowRight from '@material-ui/icons/ArrowRightAlt';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export const FlightTimesAndCode = ({ depart, arrive, fromCode, toCode }) => {
  return (
    <Grid container direction="row" alignItems="center" spacing={8} justify="center">
      <Grid item>
        <TimeAirportCode time={depart} airportCode={fromCode} />
      </Grid>
      <Grid item>
        <ArrowRight />
      </Grid>
      <Grid item>
        <TimeAirportCode time={arrive} airportCode={toCode} />
      </Grid>
    </Grid>
  );
};

//TODO <Typography variant="body2">{airportCode}</Typography> should be mediumEmphasis
const TimeAirportCode = ({ time, airportCode }) => {
  return (
    <Grid container direction="column" spacing={8}>
      <Grid item>
        <Typography variant="subtitle2">{time}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">{airportCode}</Typography>
      </Grid>
    </Grid>
  );
};
// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing.unit
//   },
//   code: { alignSelf: 'center' }
// });
// export default withStyles(styles)(TimeAirportCode);
