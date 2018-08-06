import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';
class EditProfile extends Component {
  state = {
    errorMsg: '',
    username: this.props.currentUser.username,
    password: '',
    confirmPassword: '',
    first_name: this.props.currentUser.first_name,
    last_name: this.props.currentUser.last_name,
    email: this.props.currentUser.email,
    photo: this.props.currentUser.photo
    // current_company: this.props.currentUser.current_company
    //   ? this.props.currentUser.current_company
    //   : ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    if (this.state.password.length < 5) {
      this.setState({ errorMsg: 'Password length must be at least 5!' });
    } else if (this.state.password === this.state.confirmPassword) {
      this.props.clearError();
      let newCurrentUser = {
        username: this.props.currentUser.username,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        photo: this.state.photo
      };

      if (this.props.currentUser.current_company) {
        newCurrentUser.current_company = this.props.currentUser.current_company;
      }
      try {
        // call redux

        await this.props.updateCurrentUser(newCurrentUser);
        this.props.history.push(`/profile/${this.props.currentUser.username}`);
      } catch (error) {
        return;
      }
    } else {
      this.setState({ errorMsg: 'Please double check your password!' });
    }
  };

  render() {
    const { error } = this.props;
    let displayError;
    if (error.hasError) {
      displayError = (
        <div className="error-message">
          <h3>{this.props.error.title}</h3>
          <p>{this.props.error.message}</p>
        </div>
      );
    }

    let confirmPasswordMsg;
    if (this.state.errorMsg) {
      confirmPasswordMsg = (
        <div className="error-message">
          <h3>{this.state.errorMsg}</h3>
        </div>
      );
    }
    return (
      <div className="feed">
        <div className="profile-card">
          {confirmPasswordMsg}
          {displayError}
          <form onSubmit={this.handleSubmit}>
            <li className="signup-form-row">
              <label htmlFor="username">
                Username: {this.props.currentUser.username}
              </label>
              {/* <input
                type="text"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
              /> */}
            </li>

            <li className="signup-form-row">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                name="first_name"
                onChange={this.handleChange}
                value={this.state.first_name}
              />
            </li>

            <li className="signup-form-row">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                name="last_name"
                onChange={this.handleChange}
                value={this.state.last_name}
              />
            </li>

            <li className="signup-form-row">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </li>

            <li className="signup-form-row">
              <label htmlFor="photo">Photo</label>
              <input
                type="text"
                name="photo"
                onChange={this.handleChange}
                value={this.state.photo}
              />
            </li>

            <li className="signup-form-row">
              <label htmlFor="current_company">
                Current Company: @{this.props.currentUser.current_company}
              </label>
              {/* <input
                type="text"
                name="current_company"
                onChange={this.handleChange}
                value={this.state.current_company}
              /> */}
            </li>

            <li className="signup-form-row">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </li>

            <li className="signup-form-row">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                onChange={this.handleChange}
                value={this.state.confirmPassword}
              />
            </li>

            {/* <li className="goback-form-row">
              
            </li> */}
            <li className="signup-form-row">
              <Link
                to={`/profile/${this.props.currentUser.username}`}
                className="goback-form-row"
              >
                <button>Go Back</button>
              </Link>
              <button type="submit">Update!</button>
            </li>
          </form>
        </div>
      </div>
    );
  }
}

EditProfile.propTypes = {
  currentUser: PropTypes.object,
  error: PropTypes.object
};
export default EditProfile;
