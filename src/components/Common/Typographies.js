import React from 'react';
import Typography from '@material-ui/core/Typography';


export const Subtitle1White = ({ children }) => {
    return (
        <Typography variant={'subtitle1'} color='textPrimary'>
            {children}
        </Typography>
    );
};

export const Subtitle2White = ({ children }) => {
  return (
    <Typography variant={'subtitle2'} color='textPrimary'>
      {children}
    </Typography>
  );
};
