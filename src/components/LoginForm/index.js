import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const DEFAULT_STATE = {
  username: '',
  password: ''
};

export default class LoginForm extends Component {
  state = DEFAULT_STATE;

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let userCredentials = { ...this.state };
    // call redux
    console.log(userCredentials);
    this.setState(DEFAULT_STATE);
  };

  render() {
    if (this.props.currentUser.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" onChange={this.handleChange} />
        <input type="password" name="password" onChange={this.handleChange} />
        <button type="submit">Login</button>
      </form>
    );
  }
}
