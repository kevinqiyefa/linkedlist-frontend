import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div>
        <h1>Welcome to Linked List!</h1>
        <Link to="/signup">Sign up here</Link>
      </div>
    );
  }
  return <h1>You are logged in!</h1>;
};

Homepage.propTypes = {
  currentUser: PropTypes.object
};

export default Homepage;
