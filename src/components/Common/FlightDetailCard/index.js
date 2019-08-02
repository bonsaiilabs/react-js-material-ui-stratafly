import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import FlightTakeOff from '@material-ui/icons/FlightTakeoffOutlined';
import { ReviewFlightHeader } from './ReviewFlightHeader';
import { ReviewFlightBody } from './ReviewFlightBody';
import { Card, Grid, makeStyles } from '@material-ui/core';

export const FlightDetailCard = ({ from, to, flight, onClose, headerName }) => {
  const classes = useStyles();
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

const useStyles = makeStyles(theme => ({
  root: { borderRadius: theme.shape.borderRadius * 2 },
  header: { padding: theme.spacing(1) }
}));
