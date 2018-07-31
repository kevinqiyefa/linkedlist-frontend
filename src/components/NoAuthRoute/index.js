import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * NoAuthRoute replaces a regular Route component whenever we want
 *  to redirect a user if they are already authenticated.
 */
export default class NoAuthRoute extends Component {
  render() {
    const {
      isAuthenticated,
      component: RouteComponent,
      ...propsForRoute
    } = this.props;

    // the component to be rendered by the Route, or a Redirect if not logged in
    function ChildComponent(props) {
      if (!isAuthenticated) {
        // pass-thru if not authenticated
        return <RouteComponent {...props} />;
      } else {
        // redirect if authenticated
        return <Redirect to="/" />;
      }
    }

    return (
      <Route
        {...propsForRoute}
        render={routerProps => <ChildComponent {...routerProps} />}
      />
    );
  }
}
