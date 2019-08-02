import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';
import useTheme from '@material-ui/core/styles/useTheme';

export const AppHeader = () => {
  const classes = useStyles();
  console.log(useTheme());
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Stratafly
          </Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles({
  root: { flexGrow: 1 },
  grow: { flexGrow: 1 },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});
