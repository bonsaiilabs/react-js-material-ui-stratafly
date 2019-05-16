import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import BookingConfirmationIcon from '../../images/bookingcomplete.svg';

const Confirmation = ({ classes, onClick }) => {
  return (
    <Grid container direction="column" alignItems="center" justify="center" spacing={24} className={classes.root}>
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

const styles = theme => ({
  root: { flexGrow: 1, padding: theme.spacing.unit * 3 },
  thanks: { marginTop: theme.spacing.unit * 8 },
  button: { marginTop: theme.spacing.unit * 3 },
  text: { color: theme.palette.text.primaryMediumEmphasis }
});
export default withStyles(styles)(Confirmation);
