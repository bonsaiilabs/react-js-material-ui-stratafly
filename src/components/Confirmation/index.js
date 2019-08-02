import React from 'react';
import { makeStyles, Typography, Grid, Button } from '@material-ui/core';
import BookingConfirmationIcon from '../../images/bookingcomplete.svg';

export const Confirmation = ({ onClick }) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" alignItems="center" justify="center" className={classes.root}>
      <Grid item className={classes.thanks}>
        <Typography variant="h5">{'Your flight is booked!'}</Typography>
      </Grid>

      <Grid item className={classes.thanks}>
        <Grid container>
          <Grid item xs={12}>
            <img src={BookingConfirmationIcon} alt={'booking-confirmation'} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.thanks}>
        <Typography variant="subtitle2" className={classes.text}>
          {'Check your email for itinerary details'}
        </Typography>
      </Grid>

      <Grid item>
        <Button onClick={onClick} variant="outlined" color="primary" className={classes.button}>
          + BOOK FLIGHT
        </Button>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  thanks: {
    marginTop: theme.spacing(8)
  },
  button: {
    marginTop: theme.spacing(5)
  },
  text: {
    color: theme.palette.text.primaryMediumEmphasis
  }
}));
