import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';

import './style.css';
class Profile extends Component {
  render() {
    return (
      <div>
        <Header displayName={'Kevin Qi'} />
        <div>{this.props.currentUser.firstName}</div>
      </div>
    );
  }
}

Profile.propTypes = {
  currentUser: PropTypes.object
};
export default Profile;
