import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const TravellerWarning = props => {
  let { classes, warning } = props;
  return (
    <Grid container justify="space-around" className={classes.padding}>
      <Grid item>
        <Typography variant="subtitle2" color="error">
          {warning}
        </Typography>
      </Grid>
    </Grid>
  );
};

const styles = theme => ({
  padding: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  }
});

export default withStyles(styles)(TravellerWarning);
