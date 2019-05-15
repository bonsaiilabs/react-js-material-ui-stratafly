import { Typography } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { airlineClassToLabel } from '../../../shared/app-constants';

export const SummaryMetadata = ({ totalPrice, tripType, flightClass, traveller }) => {
  let metadata = tripType + ' | ' + airlineClassToLabel[flightClass] + ' | ' + traveller;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5">{'$' + totalPrice}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption">{metadata}</Typography>
      </Grid>
    </Grid>
  );
};
