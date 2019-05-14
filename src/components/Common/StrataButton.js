import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Fab from '@material-ui/core/Fab';

function ActionButton({ classes, label, onClick, disabled }) {
    return (
        <Fab
            variant="extended"
            onClick={onClick}
            aria-label="Action"
            className={classes.fab}
            color={'primary'}
            size={'large'}
            disabled={disabled}
        >
            {label}
        </Fab>
    );
}

const styles = theme => ({
    fab: {
        paddingLeft: theme.spacing.unit * 8,
        paddingRight: theme.spacing.unit * 8
    }
});

export const StrataButton = withStyles(styles)(ActionButton);
