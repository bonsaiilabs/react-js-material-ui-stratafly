import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}));

export const ResultHeader = props => {
  const { icon1, text, icon2 } = props;
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={8}>
        <HeaderIconAndLabel icon={icon1} text={text} />
      </Grid>

      <Grid item xs={4}>
        <HeaderRightIcon icon={icon2} />
      </Grid>
    </Grid>
  );
};

const HeaderIconAndLabel = props => {
  return (
    <Grid container direction="row" alignItems={'center'} spacing={2}>
      <Grid item> {props.icon}</Grid>

      <Grid item>
        <Typography variant="subtitle1" color="secondary">
          {props.text}
        </Typography>
      </Grid>
    </Grid>
  );
};

const HeaderRightIcon = props => {
  return (
    <Grid container justify="flex-end">
      <Grid item>{props.icon}</Grid>
    </Grid>
  );
};
