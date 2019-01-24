import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';

import { ViewList, Assignment } from '@material-ui/icons';

import { BrowserRouter as Router, Switch, Route, Link, NavLink , Redirect} from 'react-router-dom';

import { PowerSettingsNew } from '@material-ui/icons';


import './Header.css'
import Jobs from '../../components/jobs/jobs';
import ModelLists from '../../components/model-lists/model-lists';
import NotFound from '../../components/not-found/not-found';
import HeaderWithLeftNav from '../HeaderWithLeftNav/HeaderWithLeftNav';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function Header(props) {
  const { classes } = props;
  const addpading = props.location.pathname.indexOf('/main/model') != -1;
  console.log(props)
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed"  className={addpading?classes.appBar:''} style={{ boxShadow: "none" }}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.grow}>
            Cerise
          </Typography>

          <Link to="/main/jobs" style={{ textDecoration: 'none', color: 'white', margin: 10, transform: 'scale(1.3)' }}>
            <Assignment />
          </Link>

          <Link to="/main/lists" style={{ textDecoration: 'none', color: 'white', margin: 10, transform: 'scale(1.3)' }}>
            <ViewList />
          </Link>

          <Link to="/login" style={{ textDecoration: 'none', color: 'white', margin: 10, transform: 'scale(1.3)' }}>
            <PowerSettingsNew />
          </Link>
        </Toolbar>
      </AppBar>
      
      <Switch>
        <Route path="/main/jobs" component={Jobs} ></Route>
        <Route path="/main/lists" component={ModelLists} ></Route>
        <Route path="/main/model/" component={HeaderWithLeftNav} ></Route>
        <Route component={NotFound} ></Route>
      </Switch>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);