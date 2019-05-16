import { StrataButton } from '../../Common/StrataButton';
import React from 'react';
import Grid from '@material-ui/core/Grid';

export const MakePaymentButton = ({ onMakePayment, disabled }) => {
  return (
    <Grid container justify="center">
      <Grid item>
        <StrataButton label={'Make Payment'} onClick={onMakePayment} disabled={disabled} />
      </Grid>
    </Grid>
  );
};
