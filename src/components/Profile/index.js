import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';
class Profile extends Component {
  render() {
    return (
      <div>
        <div>{this.props.currentUser.first_name}</div>
      </div>
    );
  }
}

Profile.propTypes = {
  currentUser: PropTypes.object
};
export default Profile;
