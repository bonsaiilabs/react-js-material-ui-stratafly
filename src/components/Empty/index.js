import React from 'react';
import Grid from '@material-ui/core/Grid';
import NoResults from '../../images/noresults.svg';
import { makeStyles } from '@material-ui/core';

export const Empty = props => {
  const { classes = useStyles() } = props;
  return (
    <Grid container className={classes.root} justify={'center'}>
      <Grid item xs={8} className={classes.imageContainer}>
        <img src={NoResults} alt={'flight'} className={classes.image} />
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2)
  },
  imageContainer: {
    height: '100%',
    width: '100%'
  },
  image: {
    paddingTop: theme.spacing(6),
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));
