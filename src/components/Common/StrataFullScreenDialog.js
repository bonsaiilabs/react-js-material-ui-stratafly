import React from 'react';
import Close from '@material-ui/icons/Close';
import { AppBar, Typography, IconButton, Toolbar, Dialog } from '@material-ui/core';

export const StrataFullScreenDialog = ({ label, open, onBack, children }) => {
  return (
    <Dialog fullScreen open={open}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton color="inherit" onClick={onBack} aria-label="Close">
            <Close />
            </IconButton>
            <Typography variant="h6" color="inherit">
              {label}
            </Typography>
          </Toolbar>
        </AppBar>
        {children}
      </Dialog>
  );
};
