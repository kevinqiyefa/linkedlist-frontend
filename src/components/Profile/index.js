import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserProfilePlaceholder from '../../images/user_placeholder.png';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v1';
import ApplicationList from '../ApplicationList';

import './style.css';
class Profile extends Component {
  render() {
    let isCurrentUser = false;
    const username = this.props.match.params.username;
    let user;
    if (username === this.props.currentUser.username) {
      user = this.props.currentUser;
      isCurrentUser = true;
    } else {
      user = this.props.location.state;
    }

    return (
      <div className="feed">
        <div className="profile-card">
          {isCurrentUser ? (
            <div>
              <Link
                to={`/profile/${this.props.currentUser.username}/edit`}
                className="edit-profile"
              >
                Edit
              </Link>
            </div>
          ) : (
            ''
          )}

          <div className="profile-content">
            <img
              className="profile-image"
              src={user.photo ? user.photo : UserProfilePlaceholder}
              alt="profile-img"
            />
            <h1 className="profile-user-info">
              {user.first_name[0].toUpperCase() +
                user.first_name.slice(1).toLowerCase()}{' '}
              {user.last_name[0].toUpperCase() +
                user.last_name.slice(1).toLowerCase()}
            </h1>

            {user.current_company ? (
              <div>
                Employed by @
                <Link to="#">
                  <h3 className="profile-company-info">
                    {user.current_company.toLowerCase()}
                  </h3>
                </Link>
              </div>
            ) : (
              <h3 className="profile-company-info">Unemployed</h3>
            )}
          </div>
        </div>
        {isCurrentUser ? (
          <div>
            <h2 className="applications-heading">
              <i className="material-icons ">&#xe85d;</i>Applications
            </h2>
            <ul />
            {user.applied_to.map(job => (
              // <li key={uuid()}>{`Job id: ${job}`}</li>

              <ApplicationList
                key={uuid()}
                job={this.props.jobs.filter(j => j.id === job)}
              />
            ))}
            {!user.applied_to.length ? <h3>Please apply some jobs!</h3> : ''}
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

Profile.propTypes = {
  currentUser: PropTypes.object,
  jobs: PropTypes.array
};
export default Profile;
