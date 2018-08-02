import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';
import Card from '../Card';
import ProtectedRoute from '../../containers/ProtectedRoute';
import { Switch } from 'react-router-dom';
import Profile from '../../containers/Profile';
import './style.css';
import HomeContent from '../HomeContent';
import Results from '../../containers/Results';

export default class Homepage extends Component {
  state = { loading: true };

  async componentDidMount() {
    await this.props.fetchCurrentUser();
    await this.props.fetchJobsRequest();
    this.setState({ loading: false });
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
        <Header displayName={this.props.currentUser.first_name} />

        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <Switch>
            <ProtectedRoute
              exact
              path="/"
              component={() => (
                <HomeContent
                  content={displayJobs}
                  isLoading={this.state.loading}
                />
              )}
            />
            <ProtectedRoute exact path="/profile" component={Profile} />
            <ProtectedRoute exact path="/results" component={Results} />
          </Switch>
        )}
      </div>
    );
  }
}

Homepage.propTypes = {
  currentUser: PropTypes.object,
  jobs: PropTypes.arrayOf(PropTypes.object)
};
