import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import Homepage from '../Homepage';
import ProtectedRoute from '../../containers/ProtectedRoute';

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/login" render={LoginForm} />
          <Route exact path="/signup" render={SignupForm} />
          <ProtectedRoute exact path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}
