import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { ViewList, Assignment } from '@material-ui/icons';
import logo from '../../assets/afiniti.png';
import Login from '../login/login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NotFound from '../not-found/not-found';
import IconButton from '@material-ui/core/IconButton';
import { PowerSettingsNew } from '@material-ui/icons';
import { Button } from 'react-bootstrap';
import Filters from './submain/filters/filters';
import ModelSpecs from './submain/model-specs/model-specs';
import Callgroups from './submain/callgroups/callgroups';
import DataFormat from './submain/data-format/data-format';
import Training from './submain/training/training';
import Diagnostics from './submain/diagnostics/diagnostics';
import Validation from './submain/validation/validation';
import ModelStacking from './submain/model-stacking/modek-stacking';
import Deployment from './submain/deployment/deployment';


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

function PermanentDrawerLeft(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{ boxShadow: "none" }}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.grow}>
            Stan POC
          </Typography>

          <Link to="/jobs" style={{ textDecoration: 'none', color: 'white', margin: 10, transform: 'scale(1.3)' }}>
            <Assignment />
          </Link>

          <Link to="/modelLists" style={{ textDecoration: 'none', color: 'white', margin: 10, transform: 'scale(1.3)' }}>
            <ViewList />
          </Link>

          <Link to="/login" style={{ textDecoration: 'none', color: 'white', margin: 10, transform: 'scale(1.3)' }}>
            <PowerSettingsNew />
          </Link>



        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper }} anchor="left">
        <div style={{ height: 64, backgroundColor: "#3f51b5" }}>
          <div style={{ textAlign: "center", padding: 4 }}>
            <img src={logo} height="55px" style={{ padding: 6 }}></img>
          </div>
        </div>
        <List style={{ padding: 0 }}>
          {/* {['Filters', 'Model Specs', 'Callgroups','Data Format','Training','Diagnostics','Model Stacking','Deployment'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}

        
            <ListItem button component={Link} to="./filters">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Filters' />
            </ListItem>
       
         
            <ListItem button component={Link} to="./modelspecs">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Model Specs' />
            </ListItem>

            <ListItem button component={Link} to="./callgroups">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Callgroups' />
            </ListItem>
            <ListItem button component={Link} to="./dataformat">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Data Format' />
            </ListItem>
            <ListItem button component={Link} to="./training">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Training' />
            </ListItem>
            <ListItem button component={Link} to="./diagnostics">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Diagnostics' />
            </ListItem>
            <ListItem button component={Link} to="./validation">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Validation' />
            </ListItem>
            <ListItem button component={Link} to="./modelstacking">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Model Stacking' />
            </ListItem>
            <ListItem button component={Link} to="./deployment">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='deployment' />
            </ListItem>
         
        </List>
      </Drawer>
      <main className={classes.content} style={{ marginTop: 50 }}>
        
          <Switch>
            <Route path="/main/filters" component={Filters} ></Route>
            <Route path="/main/modelspecs" component={ModelSpecs}  ></Route>
            <Route path="/main/callgroups" component={Callgroups}  ></Route>
            <Route path="/main/dataformat" component={DataFormat}  ></Route>
            <Route path="/main/training" component={Training}  ></Route>
            <Route path="/main/diagnostics" component={Diagnostics}  ></Route>
            <Route path="/main/validation" component={Validation}  ></Route>
            <Route path="/main/modelstacking" component={ModelStacking}  ></Route>
            <Route path="/main/deployment" component={Deployment}  ></Route>
            <Route component={NotFound} ></Route>
          </Switch>
    
      </main>
    </div>
  );
}

PermanentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawerLeft);