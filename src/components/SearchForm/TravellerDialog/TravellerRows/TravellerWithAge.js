import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

export const TravellerWithAge = props => {
  const { type, age, classes } = props;
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

const styles = theme => ({ age: { color: theme.palette.text.primaryMediumEmphasis } });

export default withStyles(styles)(TravellerWithAge);
