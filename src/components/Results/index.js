import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import uuid from 'uuid/v1';

import './style.css';
class Results extends Component {
  render() {
    let results;
    if (this.props.search.userResults) {
      results = this.props.search.userResults.map(user => (
        <Card type="user-results" user={user} key={uuid()} />
      ));
    }

    return (
      <div>
        <h2>
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
