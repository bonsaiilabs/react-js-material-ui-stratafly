import React from 'react';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';
// import {BlackCaption} from "../shared/Typography";

const styles = theme => ({
  margin: {
    // marginBottom: theme.spacing.unit * 2
  },
  textField: {
    flexBasis: 200
  },
  input: {
    color: theme.palette.common.black
  }
});

function PaymentField({ classes, value, label, placeholder, onChange, fullWidth, type }) {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      className={classes.textField}
      margin="normal"
      variant="outlined"
      fullWidth={fullWidth}
      value={value}
      type={type}
      InputProps={{ className: classes.input }}
      onChange={event => onChange(event.target.value)}
    />
  );
}

export const PaymentTextField = withStyles(styles)(PaymentField);
