import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import TravellerIcon from '@material-ui/icons/PersonOutlined';
import Grid from '@material-ui/core/Grid';
import { Subtitle1White } from '../Common/Typographies';

const Traveller = props => {
  const { classes, onClickTraveller, totalTravellers } = props;
  return (
    <Grid container alignItems="center" onClick={onClickTraveller}>
      <Grid item>
        <IconButton aria-label="Traveller">
          <TravellerIcon className={classes.iconLeft} />
          <Subtitle1White>{totalTravellers}</Subtitle1White>
        </IconButton>
      </Grid>
    </Grid>
  );
};

const styles = theme => ({ iconLeft: { color: theme.palette.common.white } });

export default withStyles(styles)(Traveller);
