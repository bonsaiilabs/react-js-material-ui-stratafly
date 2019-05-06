import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import TravellerIcon from '@material-ui/icons/PersonOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function TravellerIconAndCount(props) {
  const { classes, onClickTraveller, totalTravellers } = props;

  return (
    <Grid container alignItems="center" className={classes.root} onClick={onClickTraveller}>
      <Grid item>
        <IconButton color="inherit" aria-label="Traveller">
          <TravellerIcon className={classes.iconLeft} />
          <Typography variant="subtitle1" className={classes.traveller}>
            {totalTravellers}
          </Typography>
        </IconButton>
      </Grid>
    </Grid>
  );
}

const styles = theme => ({
  root: { flexGrow: 1 },
  iconLeft: { color: theme.palette.common.white },
  traveller: { color: theme.palette.common.white }
});

export const Traveller = withStyles(styles)(TravellerIconAndCount);
