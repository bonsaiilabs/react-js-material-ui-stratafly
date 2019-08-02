import React from 'react';
import NoResults from '../../images/noresults.svg';
import { makeStyles, Grid } from '@material-ui/core';

export const Empty = () => {
  const classes = useStyles();
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
