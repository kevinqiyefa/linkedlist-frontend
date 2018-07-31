import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import LoginForm from '../../containers/LoginForm';
import SignupForm from '../../containers/SignupForm';
import Homepage from '../../containers/Homepage';
import NoAuthRoute from '../../containers/NoAuthRoute';
import ProtectedRoute from '../../containers/ProtectedRoute';

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          {/* NoAuthRoutes only let you go to them if you haven't authenticated */}
          <NoAuthRoute exact path="/login" component={LoginForm} />
          <NoAuthRoute exact path="/signup" component={SignupForm} />
          {/* ProtectedRoutes only let you go to them if you are authenticated */}
          <ProtectedRoute exact path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}
