import { CustomInputBase } from '../common/CustomInputBase';
import React from 'react';
import Grid from '@material-ui/core/Grid';

export const FromAndToDate = ({ classes, onFromDateChange, onToDateChange, fromDate, toDate, icon }) => {
    return (
        <Grid container spacing={8}>
            <Grid item xs={6}>
                <CustomInputBase onChange={onFromDateChange} value={fromDate} type={'date'} icon={icon} />
            </Grid>
            <Grid item xs={6}>
                <CustomInputBase onChange={onToDateChange} value={toDate} type={'date'} icon={icon} />
            </Grid>
        </Grid>
    );
};