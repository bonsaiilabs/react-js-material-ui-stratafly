import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';

const TravellerInfo = ({ classes, fullName, email, onFullNameChange, onEmailChange }) => {
  return (
    <Grid container>
      <Grid item xs={12} className={classes.spacing}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              id="filled-full-width"
              label="FullName"
              value={fullName}
              fullWidth
              margin="normal"
              variant="filled"
              className={classes.textField}
              InputLabelProps={{ className: classes.inputLabel }}
              onChange={event => onFullNameChange(event.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="filled-full-width"
              label="Email"
              value={email}
              fullWidth
              margin="normal"
              variant="filled"
              className={classes.textField}
              InputLabelProps={{ className: classes.inputLabel }}
              onChange={event => onEmailChange(event.target.value)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const styles = theme => ({
  spacing: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  textField: { marginBottom: theme.spacing.unit },
  inputLabel: { color: theme.palette.text.primaryMediumEmphasis, shrink: true }
});

export default withStyles(styles)(TravellerInfo);
