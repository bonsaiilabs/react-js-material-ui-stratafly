import React from 'react';
import { codeToCityName } from '../../shared/app-constants';
import { Typography, Grid } from '@material-ui/core';

export const FlightTitle = ({ from, to, icon }) => {
  const fromCity = codeToCityName[from];
  const toCity = codeToCityName[to];
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify="space-around" alignItems="center">
          <Grid item>
            <Typography variant="h6">{fromCity}</Typography>
          </Grid>

          <Grid item> {icon} </Grid>

          <Grid item>
            <Typography variant="h6">{toCity}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
