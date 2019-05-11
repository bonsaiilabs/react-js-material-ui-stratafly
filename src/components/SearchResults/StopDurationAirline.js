import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

function MetaData({ classes, stop, duration, airline }) {
    return (
        <Grid container direction="row" className={classes.root} spacing={8}>
            <Grid item>
                <BlackBody2MediumEmphasis text={stop} />
            </Grid>
            <Grid item>
                <BlackBody2MediumEmphasis text={duration} />
            </Grid>
            <Grid item>
                <BlackBody2MediumEmphasis text={airline} />
            </Grid>
        </Grid>
    );
}
const flightMetaDataStyles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit
    }
});
export const StopDurationAirline = withStyles(flightMetaDataStyles)(MetaData);
