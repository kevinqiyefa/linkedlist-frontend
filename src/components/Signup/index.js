import React, { Component } from 'react';
import LinkedListLogo from '../../images/LinkedList_logo.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const DEFAULT_STATE = {
  username: '',
  password: '',
  first_name: '',
  last_name: '',
  email: '',
  photo: '',
  current_company: ''
};

export default class Signup extends Component {
  state = DEFAULT_STATE;

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.clearError();
    let newUser = { ...this.state };
    for (let field in newUser) {
      if (!newUser[field]) {
        delete newUser[field];
      }
    }
    try {
      // call redux
      await this.props.createUserRequest(newUser);
      await this.props.authRequest('user', newUser.username, newUser.password);
      this.props.history.push('/');
    } catch (error) {
      return;
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
    return (
      <div className="signup-container">
        <img src={LinkedListLogo} alt="LinkedList" />
        <div className="signup-form-container">
          <h2>New User Form</h2>
          {displayError}
          <form onSubmit={this.handleSubmit}>
            <li className="signup-form-row">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
              />
            </li>

            <li className="signup-form-row">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
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
              <label htmlFor="current_company">Current Company</label>
              <input
                type="text"
                name="current_company"
                onChange={this.handleChange}
                value={this.state.current_company}
              />
            </li>

            <li className="signup-form-row">
              <button type="submit">Sign Up</button>
            </li>
          </form>
          <div className="login-link">
            <Link to="/login">Click Here if You Have an Account Already</Link>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  error: PropTypes.object
};
