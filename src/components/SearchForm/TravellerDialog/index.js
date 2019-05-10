import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import TravellerWarning from './TravellerWarning';
import { CancelDone } from './CancelDone';
import { infantAloneWarning, maxTravellersWarning } from '../../../shared/app-constants';
import { TravellerRow } from './TravellerRow';

const TravellerDialog = props => {
  let { open, onClose, onDone, personAgeCount, onAdd, onRemove, showMaxWarning, showInfantWarning, classes } = props;
  let showWarning = showMaxWarning || showInfantWarning;
  console.log(showWarning)
  return (
    <Dialog open={open} onClose={onClose}>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            {personAgeCount.map((item, index) => {
              return (
                <Grid item xs={12} key={index}>
                  <TravellerRow
                    age={item.age}
                    type={item.type}
                    count={item.count}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    disableRemove={item.disableRemove}
                    disableAdd={item.disableAdd}
                  />
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={12} className={classes.margin}>
            {!showWarning && <CancelDone onCancel={onClose} onDone={onDone} />}
            {showMaxWarning && (
              <TravellerWarning showMaxWarning={showMaxWarning} warningMessage={maxTravellersWarning} />
            )}
            {showInfantWarning && (
              <TravellerWarning showInfantWarning={showMaxWarning} warningMessage={infantAloneWarning} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

const travellerStyles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  margin: { marginTop: theme.spacing.unit, marginBottom: theme.spacing.unit }
});
export default withStyles(travellerStyles)(TravellerDialog);
