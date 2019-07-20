import { Grid, Typography } from '@material-ui/core';
import React from 'react';

export const ReviewFlightHeader = ({ headerName, leftIcon, closeIcon, onClose }) => {
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item> {leftIcon} </Grid>
      <Grid item>
        <Typography variant="subtitle2">{headerName}</Typography>
      </Grid>
      <Grid item onClick={onClose}>
        {closeIcon}
      </Grid>
    </Grid>
  );
};
