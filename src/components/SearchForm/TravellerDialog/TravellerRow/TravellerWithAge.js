import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//TODO //Age is in blackMediumEmphasis body2
export const TravellerWithAge = props => {
  const { type, age } = props;
  return (
    <Grid container alignItems="center">
      <Grid item xs={12}>
        <Typography variant="subtitle1" color="textPrimary">
          {type}
        </Typography>
      </Grid>
      <Grid item xs={12}>
          <Typography variant="body2" color="textPrimary">
              {age}
          </Typography>
      </Grid>
    </Grid>
  );
};