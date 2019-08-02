import React from 'react';
import { TravellerInfo } from './TravellerInfo';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import { PaymentInfo } from './PaymentInfo';
import { MakePaymentButton } from './MakePaymentButton';

export const Payment = props => {
  const {
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
  const classes = useStyles();

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

      <Grid item className={classes.makePaymentButton}>
        <MakePaymentButton onMakePayment={onMakePayment} disabled={disabled} />
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(7)
  },
  payment: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.primaryMediumEmphasis
  },
  makePaymentButton:{ marginTop: theme.spacing(3)}
}));
