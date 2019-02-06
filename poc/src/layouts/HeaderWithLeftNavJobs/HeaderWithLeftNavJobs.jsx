import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import logo from '../../assets/afiniti.png';

import { BrowserRouter as Router, Switch, Route, Link,NavLink ,Redirect} from 'react-router-dom';
import NotFound from '../../components/not-found/not-found';

import Jobs from '../../components/jobs/jobs';
import ModelSpecs from '../../components/model-specs/model-specs';
import CreateJob from '../../components/jobs_create/jobs_create';

import './HeaderWithLeftNavJobs.css';
import ViewJob from '../../components/jobs_view/jobs_view';


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

function HeaderWithLeftNavJobs(props) {
  const { classes } = props;
  const id = 'new'
  console.log(props)
  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper }} anchor="left">
        <div style={{ height: 64, backgroundColor: "#3f51b5" }}>
          <div style={{ textAlign: "center", padding: 4 }}>
            <img src={logo} height="55px" style={{ padding: 6 }}></img>
          </div>
        </div>
        <List style={{ padding: 0 }}>
            <ListItem button component={NavLink} className={props.location.pathname === '/main/jobs/alljobs' ? 'active' : ''} to='/main/jobs/alljobs' >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='All Jobs' />
            </ListItem>
            <ListItem button component={NavLink} className={props.location.pathname === '/main/jobs/'+id+'/create' ? 'active' : ''} to={`/main/jobs/${id}/create`} >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Create' />
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content} style={{ marginTop: 50 }}>
        
          <Switch>
            <Route path="/main/jobs/alljobs" component={Jobs} ></Route>
            <Route path="/main/jobs/:id?/view" component={ViewJob}  ></Route>
            <Route path="/main/jobs/:id?/create" component={CreateJob}  ></Route>
            <Redirect from="/main/jobs/:id?" to="/main/jobs/alljobs"></Redirect> 
            <Route component={NotFound} ></Route>
          </Switch>
    
      </main>
    </div>
  );
}

HeaderWithLeftNavJobs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderWithLeftNavJobs);