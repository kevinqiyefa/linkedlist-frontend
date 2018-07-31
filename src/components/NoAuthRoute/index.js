import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * NoAuthRoute replaces a regular Route component whenever we want
 *  to redirect a user if they are already authenticated.
 */
export default function NoAuthRoute({
  component: Component, // rename the component prop to be upperCase so we can put it in JSX
  isAuthenticated, // from Redux
  ...propsForRoute // the rest of the props given to the route while declaring
}) {
  // the component to be rendered by the Route, or a Redirect if not logged in
  const ChildComponent = props => {
    if (!isAuthenticated) {
      // pass-thru if not authenticated
      return <Component {...props} />;
    } else {
      // redirect if authenticated
      return <Redirect to="/" />;
    }
  };

  return (
    <Route
      {...propsForRoute}
      render={routerProps => <ChildComponent {...routerProps} />}
    />
  );
}
