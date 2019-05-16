import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { ExpiryCvv } from './ExpiryCvv';
import { CardNumberName } from './CardNumberName';
import { MakePaymentButton } from './MakePaymentButton';

const PaymentInfo = props => {
  const {
    classes,
    cardNumber,
    cardHolderName,
    expiry,
    cvv,
    onCardNumberChange,
    onCardHolderNameChange,
    onExpiryChange,
    onCvvChange,
    onMakePayment,
    disabled
  } = props;
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

          <Grid item xs={12} className={classes.buttonMargin}>
            <MakePaymentButton onMakePayment={onMakePayment} disabled={disabled} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const styles = theme => ({
  spacing: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  buttonMargin: { marginTop: theme.spacing.unit * 2 }
});

export default withStyles(styles)(PaymentInfo);
