import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            onChange={this.handleChange}
            value={this.state.first_name}
          />

          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            onChange={this.handleChange}
            value={this.state.last_name}
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />

          <label htmlFor="photo">Photo</label>
          <input
            type="text"
            name="photo"
            onChange={this.handleChange}
            value={this.state.photo}
          />

          <label htmlFor="current_company">Current Company</label>
          <input
            type="text"
            name="current_company"
            onChange={this.handleChange}
            value={this.state.current_company}
          />

          <button type="submit">Sign Up</button>
        </form>
        <span>Already have an account?</span>
        <Link to="/login">Click Here to Login</Link>
      </div>
    );
  }
}
