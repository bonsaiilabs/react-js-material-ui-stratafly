import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Dialog, Grid } from '@material-ui/core';
import { TravellerRows } from './TravellerRows';
import { WarningOrActionButton } from './WarningOrActionButton';

export const TravellerDialog = props => {
  let { open, onClose, onDone, personAgeCount, onAdd, onRemove, showMaxWarning, showInfantWarning } = props;
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={onClose}>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <TravellerRows personAgeCount={personAgeCount} onAdd={onAdd} onRemove={onRemove} />
        </Grid>

        <Grid item xs={12} className={classes.margin}>
          <WarningOrActionButton
            showMaxWarning={showMaxWarning}
            showInfantWarning={showInfantWarning}
            onCancel={onClose}
            onDone={onDone}
          />
        </Grid>
      </Grid>
    </Dialog>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  margin: {
    marginTop: theme.spacing(2)
  }
}));
