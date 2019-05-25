import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core';

export const CustomInputBase = ({ classes = useStyles(), onChange, value, placeholder, icon, type }) => {
  return (
    <InputBase
      startAdornment={
        <InputAdornment position="start" className={classes.textFieldIcon}>
          {icon}
        </InputAdornment>
      }
      fullWidth={true}
      placeholder={placeholder}
      value={value}
      type={type}
      className={classes.input}
      onChange={event => onChange(event.target.value)}
    />
  );
};

const useStyles = makeStyles(theme => ({
  input: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius * 2,
    color: theme.palette.common.white,
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.subtitle1.fontWeight
  },
  textFieldIcon: {
    paddingLeft: theme.spacing(1)
  }
}));
