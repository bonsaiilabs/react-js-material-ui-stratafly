import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';

export const TravellerWithAge = props => {
  const { type, age } = props;
  const classes = useStyles();
  return (
    <Grid container alignItems="center">
      <Grid item xs={12}>
        <Typography variant="subtitle1" color="textPrimary">
          {type}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" className={classes.age}>
          {age}
        </Typography>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  age: {
    color: theme.palette.text.primaryMediumEmphasis
  }
}));
