import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { TripTypeAndTraveller } from './TripTypeAndTraveller';

const SearchForm = props => {
  const { classes, selectedRadio, onChangeRadio, onClickTraveller, totalTravellers } = props;
  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item xs={12} className={classes.tripType}>
        <TripTypeAndTraveller
          selectedRadio={selectedRadio}
          onChangeRadio={onChangeRadio}
          onClickTraveller={onClickTraveller}
          totalTravellers={totalTravellers}
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
  tripType: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(SearchForm);
