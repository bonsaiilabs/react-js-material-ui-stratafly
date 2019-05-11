import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import TravellerIcon from '@material-ui/icons/PersonOutlined';
import Grid from '@material-ui/core/Grid';
import { Subtitle1White } from '../../Common/Typographies';

export const Traveller = props => {
  const { classes, onClickTraveller, totalTravellers } = props;
  return (
    <Grid container alignItems="center">
      <Grid item>
        <IconButton aria-label="Traveller" onClick={onClickTraveller}>
          <TravellerIcon className={classes.travellerIcon} />
          <Subtitle1White>{totalTravellers}</Subtitle1White>
        </IconButton>
      </Grid>
    </Grid>
  );
};
