import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import PaymentTextField from './PaymentTextField';
import { StrataButton } from '../../Common/StrataButton';
import { ExpiryCvv } from './ExpiryCvv';

const PaymentInfo = ({
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
}) => {
  return (
    <Grid container>
      <Grid item xs={12} className={classes.spacing}>
        <Grid container alignItems="center" justify="center">
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

          <Grid item xs={12}>
            <ExpiryCvv expiry={expiry} onExpiryChange={onExpiryChange} cvv={cvv} onCvvChange={onCvvChange} />
            {/*<Grid container spacing={16}>*/}
            {/*<Grid item xs={6}>*/}
            {/*<PaymentTextField*/}
            {/*value={expiry}*/}
            {/*label="Expiry date"*/}
            {/*placeholder={'mm/yy'}*/}
            {/*fullWidth={false}*/}
            {/*onChange={onExpiryChange}*/}
            {/*/>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={6}>*/}
            {/*<PaymentTextField*/}
            {/*value={cvv}*/}
            {/*label="CVV"*/}
            {/*placeholder={'3 digits on card'}*/}
            {/*fullWidth={false}*/}
            {/*type="number"*/}
            {/*onChange={onCvvChange}*/}
            {/*/>*/}
            {/*</Grid>*/}
            {/*</Grid>*/}
          </Grid>

          <Grid item xs={12} className={classes.buttonMargin}>
            <Grid container justify="center">
              <Grid item>
                <StrataButton label={'Make Payment'} onClick={onMakePayment} disabled={disabled} />
              </Grid>
            </Grid>
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
  buttonMargin: {
    marginTop: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(PaymentInfo);
