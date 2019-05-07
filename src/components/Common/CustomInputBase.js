import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase from '@material-ui/core/InputBase';

const CustomInputBase = ({ classes, onChange, value, placeholder, icon, type }) => {
  return (
    <InputBase
      startAdornment={
        <InputAdornment position="start" className={classes.icon}>
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

const styles = theme => ({
  input: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius * 2,
    color: theme.palette.common.white,
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.subtitle1.fontWeight
  },
  icon: {
    paddingLeft: theme.spacing.unit
  }
});

export default withStyles(styles)(CustomInputBase);
