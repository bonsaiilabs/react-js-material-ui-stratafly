import React from 'react';
import AddTraveller from '@material-ui/icons/AddCircleOutline';
import RemoveTraveller from '@material-ui/icons/RemoveCircleOutline';
import { Typography, IconButton, Grid } from '@material-ui/core';

export const AddRemoveTraveller = props => {
  const { type, count, onAdd, onRemove, disableRemove, disableAdd } = props;
  return (
    <Grid container justify="center">
      <Grid item xs={12} />
      <RemoveCountAdd
        type={type}
        count={count}
        onAdd={onAdd}
        onRemove={onRemove}
        disableRemove={disableRemove}
        disableAdd={disableAdd}
      />
    </Grid>
  );
};

const RemoveCountAdd = props => {
  const { type, count, onAdd, onRemove, disableRemove, disableAdd } = props;
  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        <IconButton disabled={disableRemove} onClick={() => onRemove(count, type)}>
          <RemoveTraveller />
        </IconButton>
      </Grid>

      <Grid item>
        <Typography variant="subtitle1" color="textPrimary">
          {count}
        </Typography>
      </Grid>

      <Grid item>
        <IconButton disabled={disableAdd} onClick={() => onAdd(count, type)}>
          <AddTraveller />
        </IconButton>
      </Grid>
    </Grid>
  );
};
