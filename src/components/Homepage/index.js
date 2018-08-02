import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Card from '../Card';
import ProtectedRoute from '../../containers/ProtectedRoute';
import { Switch, Link } from 'react-router-dom';
import Profile from '.';
import './style.css';

export default class Homepage extends Component {
  state = { loading: true };

  async componentDidMount() {
    await this.props.fetchCurrentUser();
    await this.props.fetchJobsRequest();
    this.setState({ loading: false });
  }

  render() {
    const { jobs } = this.props;

    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
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
    const name = () => {
      return (
        this.props.currentUser.first_name[0].toUpperCase() +
        this.props.currentUser.first_name.slice(1)
      );
    };

    return (
      <div>
        <Header displayName={name()} />
        {/* {this.props.currentUser} */}

        <div className="feed">
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
