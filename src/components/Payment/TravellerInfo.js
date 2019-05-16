import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';

function NameEmail({ classes, fullName, email, onFullNameChange, onEmailChange }) {
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
              className={classes.field}
              InputLabelProps={{ shrink: true }}
              InputProps={{ className: classes.input }}
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
              className={classes.field}
              InputLabelProps={{ shrink: true }}
              InputProps={{ className: classes.input }}
              onChange={event => onEmailChange(event.target.value)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const styles = theme => ({
  spacing: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  field: {
    marginBottom: theme.spacing.unit,
    color: '#000000',
  },
  input: {
    color: '#000000',
    border: '1px solid green'
  }
});

export const TravellerInfo = withStyles(styles)(NameEmail);
