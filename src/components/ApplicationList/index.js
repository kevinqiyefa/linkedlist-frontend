import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

class ApplicationList extends Component {
  render() {
    const application = this.props.job[0];
    return (
      <div>
        <div className="jobCard">
          <div className="job-result-info">
            <div className="job-header">
              <h3 id="job-result-title">{application.title.toUpperCase()}</h3>

              <Link to="#">
                <strong>@{application.company}</strong>
              </Link>
            </div>
            <p id="equity-salary">
              <span id="equity">Equity: {application.equity} </span> Salary: ${
                application.salary
              }
            </p>
          </div>
          <button className="appliedButton">Applied</button>
        </div>
      </div>
    );
  }
}

ApplicationList.propTypes = {
  job: PropTypes.array
};
export default ApplicationList;
