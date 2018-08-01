import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LinkedListLogo from '../../images/LinkedList_logo.png';
import './style.css';

const DEFAULT_STATE = {
  username: '',
  password: ''
};

export default class Login extends Component {
  state = DEFAULT_STATE;

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.clearError();
    let userCredentials = { ...this.state };
    // call redux
    try {
      await this.props.authRequest(
        'user',
        userCredentials.username,
        userCredentials.password
      );
      this.props.history.push('/');
    } catch (error) {
      return;
    }
  };

  render() {
    let { error } = this.props;
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
      <div className="login-container">
        <img src={LinkedListLogo} alt="LinkedList" />
        <div className="login-form-container">
          <h2>
            Welcome to LinkedList, where you can totally like, land a sweet
            developer job or whatever.
          </h2>
          {displayError}
          <form onSubmit={this.handleSubmit}>
            <li className="login-form-row">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
              />
            </li>
            <li className="login-form-row">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </li>
            <li className="login-form-row">
              <button type="submit">Login</button>
            </li>
          </form>
          <div className="signup-link">
            <Link to="/signup">New to LinkedList? Sign Up!</Link>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  error: PropTypes.object
};
