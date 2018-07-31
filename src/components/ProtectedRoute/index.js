import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * ProtectedRoute replaces a regular Route component whenever we want
 *  to selectively permit access based on if the user is authenticated.
 *  It will redirect non-authenticated users.
 */
const ProtectedRoute = ({
  component: Component, // rename the component prop to be upperCase so we can put it in JSX
  isAuthenticated, // from Redux
  ...propsForRoute // the rest of the props given to the route while declaring
}) => {
  // the component to be rendered by the Route, or a Redirect if not logged in
  const ChildComponent = props => {
    if (isAuthenticated) {
      // pass-thru if authenticated
      return <Component {...props} />;
    } else {
      // redirect if not authenticated
      return <Redirect to="/login" />;
    }
  };

  return (
    <Route
      {...propsForRoute}
      render={routerProps => <ChildComponent {...routerProps} />}
    />
  );
};

export default ProtectedRoute;
