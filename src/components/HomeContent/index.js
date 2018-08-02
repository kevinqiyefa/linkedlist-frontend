import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
class HomeCentent extends Component {
  render() {
    return (
      <div>
        <div className="feed">
          <h1>
            <i className="material-icons">&#xe85d;</i>Jobs
          </h1>
          {this.props.content}
        </div>
      </div>
    );
  }
}

HomeCentent.propTypes = {
  currentUser: PropTypes.object
};
export default HomeCentent;
