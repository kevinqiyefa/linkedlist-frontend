import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';
import { titleCase } from '../../services/name';

import './style.css';
class Profile extends Component {
  render() {
    return (
      <div>
        <Header
          displayName={titleCase(
            this.props.currentUser.first_name,
            this.props.currentUser.last_name
          )}
        />
        <div>{this.props.currentUser.first_name}</div>
      </div>
    );
  }
}

Profile.propTypes = {
  currentUser: PropTypes.object
};
export default Profile;
