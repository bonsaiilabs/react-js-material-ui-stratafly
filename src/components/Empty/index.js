import React from 'react';
import Grid from '@material-ui/core/Grid';
import NoResults from '../../images/noresults.svg';
import withStyles from '@material-ui/core/styles/withStyles';

const Empty = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.root} justify={'center'}>
      <Grid item xs={8} className={classes.imageContainer}>
        <img src={NoResults} alt={'flight'} className={classes.image} />
      </Grid>
    </Grid>
  );
};

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2
  },
  imageContainer: {
    height: '100%',
    width: '100%'
  },
  image: {
    paddingTop: theme.spacing.unit * 6,
    maxWidth: '100%',
    maxHeight: '100%'
  }
});

export default withStyles(styles)(Empty);
