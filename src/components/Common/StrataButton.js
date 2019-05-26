import React from 'react';
import { makeStyles, Fab } from '@material-ui/core';

export const StrataButton = ({ classes = useStyles(), label, onClick, disabled }) => {
  return (
    <Fab
      variant="extended"
      onClick={onClick}
      aria-label="Action"
      className={classes.fab}
      color={'primary'}
      size={'large'}
      disabled={disabled}
    >
      {label}
    </Fab>
  );
};

const useStyles = makeStyles(theme => ({
  fab: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6)
  }
}));
