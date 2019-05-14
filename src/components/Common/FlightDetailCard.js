import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import FlightTakeOff from '@material-ui/icons/FlightTakeoffOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Wifi from '@material-ui/icons/WifiOutlined';
import Power from '@material-ui/icons/Power';
import AirlineSeatRecline from '@material-ui/icons/AirlineSeatReclineExtraOutlined';
import { FlightTimesAndCode } from './FlightTimesAndCode';
import { flightInfo, stops } from '../../shared/app-constants';
import { StopDurationAirline } from '../SearchResults/Flights/FlightCard/StopDurationAirline';
import {
  Card,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Grid,
  withStyles
} from '@material-ui/core';

function ReviewCard({ classes, from, to, flight, onClose, headerName }) {
  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.header}>
          <ReviewFlightHeader
            headerName={headerName}
            onClose={onClose}
            leftIcon={<FlightTakeOff className={classes.icon} />}
            closeIcon={<CloseIcon className={classes.icon} />}
          />
        </Grid>
        <Grid item xs={12}>
          <ReviewFlightDetails from={from} to={to} flight={flight} />
        </Grid>
      </Grid>
    </Card>
  );
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: theme.shape.borderRadius * 2
  },
  header: {
    padding: theme.spacing.unit
  },
  error: {
    color: theme.palette.error.main,
    paddingTop: theme.spacing.unit * 2
  }
});
export const FlightDetailCard = withStyles(styles)(ReviewCard);

export const ReviewFlightHeader = ({ classes, headerName, leftIcon, closeIcon, onClose }) => {
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item> {leftIcon} </Grid>
      <Grid item>
        <Typography variant="subtitle2">{headerName}</Typography>
        {/*<BlackSubtitle2 text={headerName} />*/}
      </Grid>
      <Grid item onClick={onClose}>
        {closeIcon}
      </Grid>
    </Grid>
  );
};

export const InFlightRow = ({ icon, text }) => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={4}>
        {icon}
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body2">{text}</Typography>
        {/*<BlackBody2MediumEmphasis text={text} />*/}
      </Grid>
    </Grid>
  );
};

//TODO Message should be in red color
function ExpandMore({ classes, from, to, flight }) {
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
            <StopDurationAirline stop={stop} duration={flight.totalTime + '.'} airline={flight.airline} classes={classes}/>
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
            {/*<ErrorBody2 text="This flight is often delayed by 30+ minutes" />*/}
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

const flightDetailStyles = theme => ({
  expand: {
    backgroundColor: theme.palette.primary.light
  },
  icon: {
    color: theme.palette.text.secondaryMediumEmphasis
  },
  body2MediumEmphasis: { color: theme.palette.text.primaryMediumEmphasis }
});

export const ReviewFlightDetails = withStyles(flightDetailStyles)(ExpandMore);
