import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import uuid from 'uuid/v1';

import './style.css';
class Results extends Component {
  render() {
    let results;
    if (this.props.search.userResults.length) {
      results = this.props.search.userResults.map(user => (
        <Card type="user-results" user={user} key={uuid()} />
      ));
    } else if (this.props.search.companiesResults.length) {
      results = this.props.search.companiesResults.map(company => (
        <Card type="company-results" company={company} key={uuid()} />
      ));
    } else if (this.props.search.jobsResults.length) {
      results = this.props.search.jobsResults.map(job => (
        <Card type="job-results" job={job} key={uuid()} />
      ));
    } else {
      results = <h2>No Results</h2>;
    }

    return (
      <div className="feed">
        <h2 className="result-heading">
          <i className="material-icons">search</i>Search Results
        </h2>
        <div>{results}</div>
      </div>
    );
  }
}

Results.propTypes = {
  search: PropTypes.object
};
export default Results;
