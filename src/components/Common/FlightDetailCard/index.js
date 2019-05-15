import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import FlightTakeOff from '@material-ui/icons/FlightTakeoffOutlined';
import { ReviewFlightHeader } from './ReviewFlightHeader';
import ReviewFlightBody from './ReviewFlightBody';
import { Card, Grid, withStyles } from '@material-ui/core';

const FlightDetailCard = ({ classes, from, to, flight, onClose, headerName }) => {
  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.header}>
          <ReviewFlightHeader
            headerName={headerName}
            onClose={onClose}
            leftIcon={<FlightTakeOff className={classes.icon} />}
            closeIcon={<CloseIcon className={classes.icon} />}
          />
        </Grid>
        <Grid item xs={12}>
          <ReviewFlightBody from={from} to={to} flight={flight} />
        </Grid>
      </Grid>
    </Card>
  );
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: theme.shape.borderRadius * 2
  },
  header: { padding: theme.spacing.unit }
});
export default withStyles(styles)(FlightDetailCard);
