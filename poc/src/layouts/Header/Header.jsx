import React,{Component} from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import ACTIONS from "../../redux/localstorage/localstorage-actions";

import Typography from '@material-ui/core/Typography';

import { ViewList, Assignment } from '@material-ui/icons';

import { BrowserRouter as Router, Switch, Route, Link, NavLink , Redirect} from 'react-router-dom';

import { PowerSettingsNew } from '@material-ui/icons';
import {compose} from 'recompose'

import './Header.css'
import Jobs from '../../components/jobs/jobs';
import ModelLists from '../../components/model-lists/model-lists';
import NotFound from '../../components/not-found/not-found';
import HeaderWithLeftNav from '../HeaderWithLeftNav/HeaderWithLeftNav';
import HeaderWithLeftNavJobs from '../HeaderWithLeftNavJobs/HeaderWithLeftNavJobs';
import ModelSummary from '../../components/model-summary/model-summary';
import ModelStacking from '../../components/model-stacking/modek-stacking';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    
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

class Header extends Component {
  handleLogout = () =>{
    this.props.logout()
    this.props.history.push('/login')
  }
  componentWillMount()
  {
    //  user is not logged in
    if(this.props.AppStore.localStorage.user.email == undefined)
    {
      this.props.history.push('/login')
    }
    else
    {
      
    }
  }
  render(){
    const { classes } = this.props;
  const id= 'new'
  const addpading = this.props.location.pathname.indexOf('/main/modelList') == -1 &&  this.props.location.pathname.indexOf('/main/modelstacking') == -1;
  console.log(this.props)
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed"  className={addpading?classes.appBar:''} style={{ boxShadow: "none" }}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.grow}>
            Cerise
          </Typography>
          <Link to={`/main/model/${id}`} style={{color: 'white', margin: 10 }}>
            Model
          </Link>
          <Link to={`/main/modelstacking`} style={{color: 'white', margin: 10 }}>
            Model Stacking
          </Link>
          <Link to="/main/jobs/alljobs" style={{color: 'white', margin: 10 }}>
            Jobs
          </Link>

          <Link to="/main/modelList" style={{color: 'white', margin: 10 }}>
            Model List
          </Link>

          <a onClick={this.handleLogout} style={{ color: 'white', margin: 10}}>
            <PowerSettingsNew />
          </a>
        </Toolbar>
      </AppBar>
      
      <Switch>
        <Route path="/main/jobs/" component={HeaderWithLeftNavJobs} ></Route>
        <Route path="/main/modelList" component={ModelLists} exact></Route>
        <Route path="/main/modelstacking" component={ModelStacking} exact></Route>
        <Route path="/main/modelList/:id/model" component={ModelSummary} exact ></Route>
        <Route path="/main/model/" component={HeaderWithLeftNav} ></Route>
        <Redirect from="/main" to="/main/modelList" ></Redirect>
        {/* <Route component={NotFound} ></Route> */}
      </Switch>
    </div>
  );
  }
  
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  AppStore: state
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(ACTIONS.clearUser()),
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps,mapDispatchToProps)
)
  (Header);