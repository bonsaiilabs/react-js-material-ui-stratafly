import React from 'react';
import { flightInfo, stops } from '../../../shared/app-constants';
import { FlightTimesAndCode } from '../FlightTimesAndCode';
import { StopDurationAirline } from '../../SearchResults/Flights/FlightCard/StopDurationAirline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Wifi from '@material-ui/icons/WifiOutlined';
import Power from '@material-ui/icons/Power';
import AirlineSeatRecline from '@material-ui/icons/AirlineSeatReclineExtraOutlined';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Typography,
  withStyles
} from '@material-ui/core';

const FlightDetails = ({ classes, from, to, flight }) => {
  let stop = flight.stops === stops.nonStop ? stops.nonStop : stops.oneStop + ' at ' + flight.viaAirlineCode + '. ';
  return (
    <ExpansionPanel className={classes.expand}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Grid container>
          <Grid item xs={12}>
            <FlightTimesAndCode
              depart={flight.depart}
              arrive={flight.arrive}
              fromCode={from}
              toCode={to}
              classes={classes}
            />
          </Grid>

          <Grid item xs={12}>
            <StopDurationAirline
              stop={stop}
              duration={flight.totalTime + '.'}
              airline={flight.airline}
              classes={classes}
            />
          </Grid>
        </Grid>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails>
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
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

const styles = theme => ({
  expand: { backgroundColor: theme.palette.primary.light },
  icon: { color: theme.palette.text.primaryMediumEmphasis },
  body2MediumEmphasis: { color: theme.palette.text.primaryMediumEmphasis }
});

export default withStyles(styles)(FlightDetails);

export const InFlightRow = ({ icon, text }) => {
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
