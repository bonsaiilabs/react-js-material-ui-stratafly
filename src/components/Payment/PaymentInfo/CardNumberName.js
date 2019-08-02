import React from 'react';
import { PaymentTextField } from './PaymentTextField';
import Grid from '@material-ui/core/Grid';

export const CardNumberName = ({ cardNumber, onCardNumberChange, cardHolderName, onCardHolderNameChange }) => {
  return (
    <>
      <Grid item xs={12}>
        <PaymentTextField
          value={cardNumber}
          label="Credit Card Number"
          placeholder="visa, master, amex only"
          fullWidth={true}
          type="number"
          onChange={onCardNumberChange}
        />
      </Grid>

      <Grid item xs={12}>
        <PaymentTextField
          value={cardHolderName}
          label="Card holder name"
          placeholder="Name as on card"
          fullWidth={true}
          onChange={onCardHolderNameChange}
        />
      </Grid>
    </>
  );
};
