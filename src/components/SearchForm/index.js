import React from 'react';
import { TripTypeAndTraveller } from './TripTypeAndTraveller';
import { makeStyles } from '@material-ui/core/styles';

export const SearchForm = props => {
  const { selectedRadio, onChangeRadio, onClickTraveller, totalTravellers } = props;
  const classes = useStyles();
  return (
    <div className={classes.searchFormContainer}>
      <TripTypeAndTraveller
        selectedRadio={selectedRadio}
        onChangeRadio={onChangeRadio}
        onClickTraveller={onClickTraveller}
        totalTravellers={totalTravellers}
        classes={classes}
      />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  searchFormContainer: {
    flexGrow: 1,
    background: theme.palette.primary[700],
    paddingTop: theme.spacing(8)
  },
  tripTypeTraveller: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  travellerIcon: { color: theme.palette.text.secondary }
}));
