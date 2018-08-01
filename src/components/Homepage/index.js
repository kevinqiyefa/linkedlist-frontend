import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

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
        <li key={job.id}>{job.title}</li>
      ));
    }

    return (
      <div>
        <Header />
        <h1>Jobs</h1>
        {displayJobs}
      </div>
    );
  }
}

Homepage.propTypes = {
  currentUser: PropTypes.object
};
