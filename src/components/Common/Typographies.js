import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
//TODO :Inject textPrimary for the black color instead of using withStyles
function DarkSubtitle1({ classes, text }) {
    return (
        <Typography variant={'subtitle1'} className={classes.subtitle1}>
            {text}
        </Typography>
    );
}
const styles = theme => ({ subtitle1: { color: theme.palette.common.black } });
export const BlackSubtitle1 = withStyles(styles)(DarkSubtitle1);

/**
 *
 * @param classes
 * @param text
 * @returns {*}
 * @constructor
 */
function DarkSubtitle2({ classes, text }) {
  return (
    <Typography variant={'subtitle2'} className={classes.subtitle1}>
      {text}
    </Typography>
  );
}
const subtitle2Styles = theme => ({ subtitle1: { color: theme.palette.common.black } });
export const BlackSubtitle2 = withStyles(subtitle2Styles)(DarkSubtitle2);

/**
 *
 * @param classes
 * @param text
 * @returns {*}
 * @constructor
 */
function DarkSubtitle2MediumEmphasis({ classes, text }) {
    return (
        <Typography variant={'subtitle2'} className={classes.subtitle1}>
            {text}
        </Typography>
    );
}
const subtitle2MediumEmphasisStyle = theme => ({ subtitle1: { color: theme.palette.text.secondaryMediumEmphasis } });
export const BlackSubtitle2MediumEmphasis = withStyles(subtitle2MediumEmphasisStyle)(DarkSubtitle2MediumEmphasis);


/**
 *
 * @param classes
 * @param text
 * @returns {*}
 * @constructor
 */
function DarkHeading6({ classes, text }) {
    return (
        <Typography variant={'h6'} className={classes.h6}>
            {text}
        </Typography>
    );
}
const stylesH6 = theme => ({
    h6: { color: theme.palette.common.black }
});
export const BlackH6 = withStyles(stylesH6)(DarkHeading6);