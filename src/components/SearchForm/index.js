import React from 'react';
import Grid from '@material-ui/core/Grid';
import TripType from './TripType';
import Traveller from './Traveller';
import withStyles from '@material-ui/core/styles/withStyles';

function Form(props) {
  const { classes, selectedRadio, onChangeRadio, onClickTraveller, totalTravellers } = props;
  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item xs={12} className={classes.form}>
        <Grid container spacing={8}>
          <Grid item xs={9}>
            <TripType selectedRadio={selectedRadio} onChangeRadio={onChangeRadio} />
          </Grid>

          <Grid item xs={3}>
            <Traveller onClickTraveller={onClickTraveller} totalTravellers={totalTravellers} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: theme.palette.primary[700],
    paddingTop: theme.spacing.unit * 8
  },
  form: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  }
});

export const SearchForm = withStyles(styles)(Form);
