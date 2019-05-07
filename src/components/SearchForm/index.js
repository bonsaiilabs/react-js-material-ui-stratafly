import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { TripLocation } from './TripLocation';
import { TripTypeAndTraveller } from './TripTypeAndTraveller';

const SearchForm = props => {
  const {
    classes,
    selectedRadio,
    onChangeRadio,
    onClickTraveller,
    totalTravellers,
    fromLocation,
    onChangeFromLocation,
    toLocation,
    onChangeToLocation
  } = props;
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.form}>
        <TripTypeAndTraveller
          selectedRadio={selectedRadio}
          onChangeRadio={onChangeRadio}
          onClickTraveller={onClickTraveller}
          totalTravellers={totalTravellers}
        />
      </Grid>

      <Grid item xs={12} className={classes.location}>
        <TripLocation
          location={fromLocation}
          onChangeLocation={onChangeFromLocation}
          classes={classes}
          placeholder={'From'}
        />
      </Grid>

      <Grid item xs={12} className={classes.location}>
        <TripLocation
          location={toLocation}
          onChangeLocation={onChangeToLocation}
          classes={classes}
          placeholder={'To'}
        />
      </Grid>
    </Grid>
  );
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: theme.palette.primary[700],
    paddingTop: theme.spacing.unit * 8
  },
  form: { paddingLeft: theme.spacing.unit * 2, paddingRight: theme.spacing.unit * 2 },
  location: { paddingLeft: theme.spacing.unit * 2, paddingRight: theme.spacing.unit * 2, paddingBottom: theme.spacing.unit * 2 }
});

export default withStyles(styles)(SearchForm);
