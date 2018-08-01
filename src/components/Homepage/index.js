import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Card from '../Card';
import ProtectedRoute from '../../containers/ProtectedRoute';
import { Switch, Link } from 'react-router-dom';
import Profile from '.';
import './style.css';

export default class Homepage extends Component {
  componentDidMount() {
    this.props.fetchJobsRequest();
  }

  render() {
    const { jobs } = this.props;
    let displayJobs;
    if (jobs.length === 0) {
      displayJobs = (
        <h3>Sorry, no jobs are available right now. Please try again later.</h3>
      );
    } else {
      displayJobs = this.props.jobs.map(job => (
        <div key={job.id}>
          <Card type={'jobs'} data={job} />
        </div>
      ));
    }

    return (
      <div>
        <Header displayName={'Kevin Qi'} />

        <div className="feed">
          <Link to="/profile"> GO TO PROFILE </Link>
          <h1>Jobs</h1>
          {displayJobs}
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
  currentUser: PropTypes.object,
  jobs: PropTypes.arrayOf(PropTypes.object)
};
