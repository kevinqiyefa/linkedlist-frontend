import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

export default class Homepage extends Component {
  render() {
    const { jobs } = this.props;
    return (
      <div>
        <Header />
        <h1>Jobs</h1>
      </div>
    );
  }
}

Homepage.propTypes = {
  currentUser: PropTypes.object
};
