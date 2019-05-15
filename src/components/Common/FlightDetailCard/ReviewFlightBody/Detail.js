import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { flightInfo } from '../../../../shared/app-constants';
import Wifi from '@material-ui/icons/WifiOutlined';
import Power from '@material-ui/icons/Power';
import AirlineSeatRecline from '@material-ui/icons/AirlineSeatReclineExtraOutlined';

export const Detail = ({ classes }) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <InFlightRow icon={<AirlineSeatRecline className={classes.icon} />} text={flightInfo.legRoom} />
      </Grid>
      <Grid item>
        <InFlightRow icon={<Wifi className={classes.icon} />} text={flightInfo.wifi} />
      </Grid>
      <Grid item>
        <InFlightRow icon={<Power className={classes.icon} />} text={flightInfo.usb} />
      </Grid>
      <Grid item>
        <Typography variant="body2" color="error">
          {flightInfo.delayMessage}
        </Typography>
      </Grid>
    </Grid>
  );
};

const InFlightRow = ({ icon, text }) => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={4}>
        {icon}
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body2">{text}</Typography>
      </Grid>
    </Grid>
  );
};
