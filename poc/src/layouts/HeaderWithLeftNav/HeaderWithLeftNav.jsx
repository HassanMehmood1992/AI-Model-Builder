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

import { BrowserRouter as Router, Switch, Route, Link,NavLink ,Redirect} from 'react-router-dom';
import NotFound from '../../components/not-found/not-found';
import IconButton from '@material-ui/core/IconButton';
import { PowerSettingsNew } from '@material-ui/icons';
import { Button } from 'react-bootstrap';
import Filters from '../../components/filters/filters';
import ModelSpecs from '../../components/model-specs/model-specs';
import Callgroups from '../../components/callgroups/callgroups';
import DataFormat from '../../components/data-format/data-format';
import Training from '../../components/training/training';
import Diagnostics from '../../components/diagnostics/diagnostics';
import Validation from '../../components/validation/validation';
import ModelStacking from '../../components/model-stacking/modek-stacking';
import Deployment from '../../components/deployment/deployment';
import './HeaderWithLeftNav.css';
import Header from '../Header/Header'

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

function HeaderWithLeftNav(props) {
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
          {/* {['Filters', 'Model Specs', 'Callgroups','Data Format','Training','Diagnostics','Model Stacking','Deployment'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}

        
            <ListItem button component={NavLink} className={props.location.pathname === '/main/model/'+id+'filters' ? 'active' : ''} to={`/main/model/${id}/filters`} >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Filters' />
            </ListItem>
       
         
            <ListItem button component={NavLink} className={props.location.pathname === '/main/model/'+id+'modelspecs' ? 'active' : ''} to={`/main/model/${id}/modelspecs`} >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Model Specs' />
            </ListItem>

            <ListItem button component={NavLink} className={props.location.pathname === '/main/model/'+id+'callgroups' ? 'active' : ''} to={`/main/model/${id}/callgroups`}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Callgroups' />
            </ListItem>
            <ListItem button component={NavLink} className={props.location.pathname === '/main/model/'+id+'dataformat' ? 'active' : ''} to={`/main/model/${id}/dataformat`}  >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Data Format' />
            </ListItem>
            <ListItem button component={NavLink} className={props.location.pathname === '/main/model/'+id+'training' ? 'active' : ''} to= {`/main/model/${id}/training`}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Training' />
            </ListItem>
            <ListItem button component={NavLink} className={props.location.pathname === '/main/model/'+id+'diagnostics' ? 'active' : ''} to={`/main/model/${id}/diagnostics`} >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Diagnostics' />
            </ListItem>
            <ListItem button component={NavLink} className={props.location.pathname === '/main/model/'+id+'validation' ? 'active' : ''}  to={`/main/model/${id}/validation`}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Validation' />
            </ListItem>
            <ListItem button component={NavLink} className={props.location.pathname === '/main/model/'+id+'modelstacking' ? 'active' : ''} to={`/main/model/${id}/modelstacking`}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Model Stacking' />
            </ListItem>
            <ListItem button component={NavLink} className={props.location.pathname === '/main/model/'+id+'deployment' ? 'active' : ''} to={`/main/model/${id}/deployment`}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Deployment' />
            </ListItem>
         
        </List>
      </Drawer>
      <div className={classes.content} style={{ marginTop: 50,width:'100%' }}>
        
          <Switch>
            <Route path="/main/model/:id?/filters" component={Filters} ></Route>
            <Route path="/main/model/:id?/modelspecs" component={ModelSpecs}  ></Route>
            <Route path="/main/model/:id?/callgroups" component={Callgroups}  ></Route>
            <Route path="/main/model/:id?/dataformat" component={DataFormat}  ></Route>
            <Route path="/main/model/:id?/training" component={Training}  ></Route>
            <Route path="/main/model/:id?/diagnostics" component={Diagnostics}  ></Route>
            <Route path="/main/model/:id?/validation" component={Validation}  ></Route>
            <Route path="/main/model/:id?/modelstacking" component={ModelStacking}  ></Route>
            <Route path="/main/model/:id?/deployment" component={Deployment}  ></Route>
            <Redirect from="/main/model/:id?" to="/main/model/:id?/filters"></Redirect> 
            <Route component={NotFound} ></Route>
          </Switch>
    
      </div>
    </div>
  );
}

HeaderWithLeftNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderWithLeftNav);