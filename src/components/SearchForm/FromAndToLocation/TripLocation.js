import Grid from '@material-ui/core/Grid';
import React from 'react';
import LocationIcon from '@material-ui/icons/LocationOnOutlined';
import {CustomInputBase} from "../../Common/CustomInputBase";

export const TripLocation = ({ location, onChangeLocation, classes, placeholder }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <CustomInputBase
          onChange={onChangeLocation}
          value={location}
          placeholder={placeholder}
          type="text"
          icon={<LocationIcon className={classes.textFieldIcon} />}
        />
      </Grid>
    </Grid>
  );
};
