import React from 'react';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

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
      onChange={event => onChange(event.target.value)}
      InputLabelProps={{ className: classes.inputLabel }}
    />
  );
}
const styles = theme => ({
  textField: { flexBasis: 200 },
  inputLabel: { color: theme.palette.text.primaryMediumEmphasis, shrink: true }
});

export const PaymentTextField = withStyles(styles)(PaymentField);
