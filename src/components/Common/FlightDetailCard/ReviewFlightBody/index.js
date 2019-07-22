import React from 'react';
import { stops } from '../../../../shared/app-constants';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, makeStyles } from '@material-ui/core';
import { Summary } from './Summary';
import { Detail } from './Detail';

export const ReviewFlightBody = ({ from, to, flight }) => {
  let stop = flight.stops === stops.nonStop ? stops.nonStop : stops.oneStop + ' at ' + flight.viaAirlineCode;
  const classes = useStyles();
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Summary from={from} to={to} flight={flight} classes={classes} stop={stop} />
      </ExpansionPanelSummary>

      <ExpansionPanelDetails>
        <Detail classes={classes} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.text.primaryMediumEmphasis
  },
  body2MediumEmphasis: {
    color: theme.palette.text.primaryMediumEmphasis
  },
  stopDurationAirline: {
    paddingTop: theme.spacing(1)
  }
}));
