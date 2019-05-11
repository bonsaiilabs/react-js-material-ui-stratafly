import React from 'react';
import Grid from '@material-ui/core/Grid';

export const IconTimeAndPrice = ({ depart, arrive, fromCode, toCode, price, tripType, airline }) => {
    return (
        <Grid container direction="row" spacing={8} alignItems="center" justify="space-around">
            <Grid item xs={2}>
                <AirlineIcon airline={airline} />
            </Grid>

            <Grid item xs={6}>
                <FlightTimesAndCode depart={depart} arrive={arrive} fromCode={fromCode} toCode={toCode} />
            </Grid>

            <Grid item xs={4}>
                <PriceTripType price={price} tripType={tripType} />
            </Grid>
        </Grid>
    );
};

export const AirlineIcon = ({ airline }) => {
    let airlineIcon = AirlineToIcon[airline];
    return (
        <Grid container justify="center">
            <Grid item style={{ height: '50%', width: '50%' }}>
                <img src={airlineIcon} alt="airline" height="100%" width="100%" />
            </Grid>
        </Grid>
    );
};

export const PriceTripType = ({ price, tripType }) => {
    return (
        <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
                <BlackSubtitle1 text={'$'+price} />
            </Grid>
            <Grid item xs={12}>
                <BlackBody2MediumEmphasis text={tripType} />
            </Grid>
        </Grid>
    );
};
