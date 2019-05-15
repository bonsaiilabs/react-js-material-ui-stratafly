import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Dialog from '@material-ui/core/Dialog';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { AppBar, Collapse } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

export const StrataFullScreenDialog = ({ classes, label, open, onBack, children }) => {
  return (
    <Collapse in={true}>
      <Dialog fullScreen open={open} onClose={onBack} TransitionComponent={Transition}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton color="inherit" onClick={onBack} aria-label="Close">
              <ArrowBack />
            </IconButton>
            <Typography variant="h6" color="inherit">
              {label}
            </Typography>
          </Toolbar>
        </AppBar>
        {children}
      </Dialog>
    </Collapse>
  );
};

function Transition(props) {
  return <Slide direction="left" {...props}/>;
}
