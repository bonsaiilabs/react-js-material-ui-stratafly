import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TripLocation } from './TripLocation';

export const FromAndToLocation = props => {
  const { fromLocation, onChangeFromLocation, toLocation, onChangeToLocation, classes } = props;
  return (
    <>
      <Grid item xs={12} className={classes.textFields}>
        <TripLocation
          location={fromLocation}
          onChangeLocation={onChangeFromLocation}
          classes={classes}
          placeholder={'From'}
        />
      </Grid>
      <Grid item xs={12} className={classes.textFields}>
        <TripLocation
          location={toLocation}
          onChangeLocation={onChangeToLocation}
          classes={classes}
          placeholder={'To'}
        />
      </Grid>
    </>
  );
};
