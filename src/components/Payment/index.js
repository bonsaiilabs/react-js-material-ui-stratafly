import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import TravellerInfo from './TravellerInfo';
import { Typography } from '@material-ui/core';
import PaymentInfo from './PaymentInfo';

const Payment = props => {
  const {
    classes,
    fullName,
    email,
    cardNumber,
    cardHolderName,
    expiry,
    cvv,
    onFullNameChange,
    onEmailChange,
    onCardNumberChange,
    onCardHolderNameChange,
    onExpiryChange,
    onCvvChange,
    onMakePayment,
    disabled
  } = props;
  return (
    <Grid container alignItems="center" justify="center" className={classes.root}>
      <Grid item>
        <TravellerInfo
          fullName={fullName}
          email={email}
          onFullNameChange={onFullNameChange}
          onEmailChange={onEmailChange}
        />
      </Grid>

      <Grid item>
        <Typography variant="subtitle2" className={classes.payment}>
          {'Payment options'}
        </Typography>
      </Grid>

      <Grid item>
        <PaymentInfo
          cardNumber={cardNumber}
          cardHolderName={cardHolderName}
          expiry={expiry}
          cvv={cvv}
          onCardNumberChange={onCardNumberChange}
          onCardHolderNameChange={onCardHolderNameChange}
          onExpiryChange={onExpiryChange}
          onCvvChange={onCvvChange}
          onMakePayment={onMakePayment}
          disabled={disabled}
        />
      </Grid>
    </Grid>
  );
};

const styles = theme => ({
  root: { marginTop: theme.spacing.unit * 7 },
  payment: { marginTop: theme.spacing.unit * 2, color: theme.palette.text.primaryMediumEmphasis }
});

export default withStyles(styles)(Payment);
