import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const DEFAULT_STATE = {
  username: '',
  password: '',
  first_name: '',
  last_name: '',
  email: '',
  photo: '',
  current_company: ''
};

export default class LoginForm extends Component {
  state = DEFAULT_STATE;

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let newUser = { ...this.state };
    // call redux
    console.log(newUser);
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
        <input type="text" name="first_name" onChange={this.handleChange} />
        <input type="text" name="last_name" onChange={this.handleChange} />
        <input type="text" name="email" onChange={this.handleChange} />
        <input type="text" name="photo" onChange={this.handleChange} />
        <input
          type="text"
          name="current_company"
          onChange={this.handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}
