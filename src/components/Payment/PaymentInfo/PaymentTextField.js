import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';

export const PaymentTextField = ({ classes = useStyles(), value, label, placeholder, onChange, fullWidth, type }) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      margin="normal"
      variant="outlined"
      fullWidth={fullWidth}
      value={value}
      type={type}
      onChange={event => onChange(event.target.value)}
      InputLabelProps={{ className: classes.inputLabel }}
    />
  );
};
const useStyles = makeStyles(theme => ({
  inputLabel: {
    color: theme.palette.text.primaryMediumEmphasis,
    shrink: true
  }
}));