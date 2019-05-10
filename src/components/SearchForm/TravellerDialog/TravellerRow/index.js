import React from 'react';
import Grid from '@material-ui/core/Grid';
import { AddRemoveTraveller } from './AddRemoveTraveller';
import { TravellerWithAge } from './TravellerWithAge';

export const TravellerRow = props => {
  const { age, type, count, onAdd, onRemove, disableRemove, disableAdd } = props;
  return (
    <Grid container>
      <Grid item xs={6}>
        <TravellerWithAge type={type} age={age} />
      </Grid>
      <Grid item xs={6} zeroMinWidth>
        <AddRemoveTraveller
          type={type}
          count={count}
          onAdd={onAdd}
          onRemove={onRemove}
          disableRemove={disableRemove}
          disableAdd={disableAdd}
        />
      </Grid>
    </Grid>
  );
};
