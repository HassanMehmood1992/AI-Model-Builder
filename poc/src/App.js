import React, { Component } from 'react';
import Login from './components/login/login';
import {BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

import NotFound from './components/not-found/not-found';

import Header from './layouts/Header/Header';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/main" component={Header} ></Route>
      <Redirect from="/" to="/login" ></Redirect>
      <Route component={NotFound} ></Route>
    </Switch>
  </Router>
);

class App extends Component {
  render() {
    return (
      <AppRouter></AppRouter>
    );
  }
}

export default App;
