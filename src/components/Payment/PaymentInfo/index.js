import React from 'react';
import { ExpiryCvv } from './ExpiryCvv';
import { CardNumberName } from './CardNumberName';
import { makeStyles, Grid } from '@material-ui/core';

export const PaymentInfo = props => {
  const {
    cardNumber,
    cardHolderName,
    expiry,
    cvv,
    onCardNumberChange,
    onCardHolderNameChange,
    onExpiryChange,
    onCvvChange
  } = props;
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} className={classes.spacing}>
        <Grid container alignItems="center" justify="center">
          <CardNumberName
            cardNumber={cardNumber}
            onCardNumberChange={onCardNumberChange}
            cardHolderName={cardHolderName}
            onCardHolderNameChange={onCardHolderNameChange}
          />

          <Grid item xs={12}>
            <ExpiryCvv expiry={expiry} onExpiryChange={onExpiryChange} cvv={cvv} onCvvChange={onCvvChange} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  spacing: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));
