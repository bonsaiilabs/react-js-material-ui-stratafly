import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import TravellerIcon from '@material-ui/icons/PersonOutlined';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const Traveller = props => {
  const { classes, onClickTraveller, totalTravellers } = props;
  return (
    <Grid container>
      <Grid item>
        <IconButton aria-label="Traveller" onClick={onClickTraveller}>
          <TravellerIcon className={classes.travellerIcon} />
          <Typography variant={'subtitle1'} color="textSecondary">
            {totalTravellers}
          </Typography>
        </IconButton>
      </Grid>
    </Grid>
  );
};
