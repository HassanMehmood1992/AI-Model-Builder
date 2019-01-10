import React, { Component } from 'react';
import './main.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
  return(
      <div>
      <AppBar position="static">
          <Toolbar>
              <Typography variant="title" color="inherit">
              React & Material-UI Sample Application
              </Typography>
          </Toolbar>
      </AppBar>
      </div>
  )
}

class Main extends Component {
  render() {
    return (
      <NavBar>
        
      </NavBar>
    );
  }
}

export default Main;
