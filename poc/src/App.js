import React, { Component } from 'react';
import Login from './components/login/login';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import './App.css';
import Main from './components/main/main';
import NotFound from './components/not-found/not-found';
import ModelLists from './components/model-lists/model-lists'
import Jobs from './components/jobs/jobs';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/main" component={Main} ></Route>
      <Route path="/jobs" component={Jobs} ></Route>
      <Route path="/modelLists" component={ModelLists} ></Route>
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
