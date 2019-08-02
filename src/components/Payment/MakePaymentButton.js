import React from 'react';
import Grid from '@material-ui/core/Grid';
import {StrataButton} from "../Common/StrataButton";

export const MakePaymentButton = ({ onMakePayment, disabled }) => {
  return (
    <Grid container justify="center">
      <Grid item>
        <StrataButton label={'Make Payment'} onClick={onMakePayment} disabled={disabled} />
      </Grid>
    </Grid>
  );
};
