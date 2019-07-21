import React from 'react';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { AppBar, Typography, IconButton, Toolbar, Dialog } from '@material-ui/core';

export const StrataFullScreenDialog = ({ label, open, onBack, children }) => {
  return (
    <Dialog fullScreen open={open} onClose={onBack}>
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
  );
};
