import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}));

export const ResultHeader = props => {
  const { classes = useStyles(), icon1, text, icon2 } = props;
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
