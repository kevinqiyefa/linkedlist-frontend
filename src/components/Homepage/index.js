import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
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
          <li>
            {job.title} @{job.company}
          </li>
          <li>
            {job.salary} | {job.equity}
          </li>
        </div>
      ));
    }

    return (
      <div>
        <Header />
        <div className="feed">
          <h1>Jobs</h1>
          {displayJobs}
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
  currentUser: PropTypes.object
};
