import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';

const styles = {
  root: { flexGrow: 1 },
  appBar: { border: '0px solid #f30067' },
  toolBar: { border: '0px solid #7bc67b' },
  grow: { flexGrow: 1, border: '0px solid yellow' },
  menuButton: { marginLeft: -12, marginRight: 20, border: '0px solid yellow' },
  userAccount: { border: '0px solid yellow' },
  headerIcons: { border: '0px solid pink' }
};

const AppHeader = props => {
  const { classes, theme } = props;
  console.log({ theme });
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon className={classes.headerIcons} />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Stratafly
          </Typography>
          <IconButton color="inherit" className={classes.userAccount}>
            <AccountCircle className={classes.headerIcons} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(AppHeader);
