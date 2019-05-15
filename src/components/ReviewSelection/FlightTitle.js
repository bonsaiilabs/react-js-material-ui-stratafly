import Grid from '@material-ui/core/Grid';
import React from 'react';
import { codeToCityName } from '../../shared/app-constants';
import { Typography } from '@material-ui/core';

export const FlightTitle = ({ classes, from, to, icon }) => {
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
