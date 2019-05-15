import React from 'react';
import { stops } from '../../../../shared/app-constants';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, withStyles } from '@material-ui/core';
import { Summary } from './Summary';
import { Details } from './Details';

const FlightDetails = ({ classes, from, to, flight }) => {
  let stop = flight.stops === stops.nonStop ? stops.nonStop : stops.oneStop + ' at ' + flight.viaAirlineCode + '. ';
  return (
    <ExpansionPanel className={classes.expand}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Summary from={from} to={to} flight={flight} classes={classes} stop={stop} />
      </ExpansionPanelSummary>

      <ExpansionPanelDetails>
        <Details classes={classes} />
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
