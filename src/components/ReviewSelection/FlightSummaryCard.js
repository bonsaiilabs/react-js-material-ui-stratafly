import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import FlightIcon from '../../images/flight.svg';
import withStyles from '@material-ui/core/styles/withStyles';
import {airlineClassToLabel} from "../../shared/app-constants";
import {Typography} from "@material-ui/core";

function SummaryCard({ classes, totalPrice, tripType, flightClass, traveller }) {
  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.padding}>
          <Grid container justify="space-around" alignItems="center">
            <Grid item xs={5} className={classes.imgContainer}>
              <img src={FlightIcon} alt={'flight'} className={classes.image} />
            </Grid>
            <Grid item xs={7}>
              <PriceMetadata
                totalPrice={totalPrice}
                tripType={tripType}
                flightClass={flightClass}
                traveller={traveller}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

const summaryStyles = theme => ({
  root: {
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.primary[200]
  },
  padding: {
    padding: theme.spacing.unit
  },
  imgContainer: {
    height: '80px',
    width: 'auto'
  },
  image: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
});

export const FlightSummaryCard = withStyles(summaryStyles)(SummaryCard);

export const PriceMetadata = ({ totalPrice, tripType, flightClass, traveller }) => {
  let metadata = tripType + ' | ' + airlineClassToLabel[flightClass] + ' | ' + traveller;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5">{'$' + totalPrice}</Typography>
        {/*<BlackH5 text={'$' + totalPrice} />*/}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption">{metadata}</Typography>
        {/*<BlackCaption text={metadata} />*/}
      </Grid>
    </Grid>
  );
};
