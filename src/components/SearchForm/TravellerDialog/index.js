import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import { TravellerRows } from './TravellerRows';
import {WarningOrActionButton} from "./WarningOrActionButton";

const TravellerDialog = props => {
  let { open, onClose, onDone, personAgeCount, onAdd, onRemove, showMaxWarning, showInfantWarning, classes } = props;
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

const travellerStyles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  margin: {
    marginTop: theme.spacing.unit * 2
  }
});
export default withStyles(travellerStyles)(TravellerDialog);
