import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const DEFAULT_STATE = {
  username: '',
  password: ''
};

export default class LoginForm extends Component {
  state = DEFAULT_STATE;

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    let userCredentials = { ...this.state };
    // call redux
    try {
      await this.props.authRequest(
        'user',
        userCredentials.username,
        userCredentials.password
      );
      this.setState(DEFAULT_STATE);
      this.props.history.push('/');
    } catch (error) {
      return;
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button type="submit">Login</button>
        </form>
        <span>Not yet a member?</span>
        <Link to="/signup">Click Here to Sign Up</Link>
      </div>
    );
  }
}
