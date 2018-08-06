import React, { Component } from 'react';
import PropTypes from 'prop-types';
import image from '../../images/company_placeholder.png';
import { Link } from 'react-router-dom';
import './style.css';
import userimageurl from '../../images/user_placeholder.png';
import companyimageurl from '../../images/company_placeholder.png';

class Card extends Component {
  handleApply = job_id => {
    this.props.applyJob(job_id);
  };

  render() {
    let cardDisplay;

    if (this.props.type === 'jobs') {
      const job = this.props.data;
      cardDisplay = (
        <div className="Card">
          <div className="img-job-info">
            <img className="Card-img" src={image} alt="company-img" />
            <div className="job-info">
              <p id="company">
                {job.title}{' '}
                <Link to="#">
                  <strong>@{job.company}</strong>
                </Link>
              </p>

              <p id="sal-eq">
                $ {job.salary} | {job.equity}
              </p>
            </div>
          </div>

          {!this.props.currentUser.applied_to.includes(job.id) ? (
            <button
              className="applyButton"
              onClick={() => this.handleApply(job.id)}
            >
              Apply
            </button>
          ) : (
            <button className="appliedButton">Applied</button>
          )}
        </div>
      );
    }

    if (this.props.type === 'user-results') {
      if (this.props.user) {
        const user = this.props.user;
        const imgURL = user.photo ? user.photo : userimageurl;
        cardDisplay = (
          <div className="Card">
            <div className="img-job-info">
              <img className="Card-img" src={imgURL} alt="user-img" />
              <div className="job-info">
                <p id="user-result-info">
                  {user.first_name[0].toUpperCase() +
                    user.first_name.slice(1).toLowerCase()}{' '}
                  {user.last_name[0].toUpperCase() +
                    user.last_name.slice(1).toLowerCase()}
                </p>
                {user.current_company ? (
                  <div>
                    Employed by @
                    <Link to="#">
                      <strong>{user.current_company.toLowerCase()}</strong>
                    </Link>
                  </div>
                ) : (
                  'Unemployed'
                )}
              </div>
            </div>
            <Link to={{ pathname: `/profile/${user.username}`, state: user }}>
              <button className="viewButton">View</button>
            </Link>
          </div>
        );
      } else {
        cardDisplay = <h2>No Results</h2>;
      }
    }

    if (this.props.type === 'company-results') {
      if (this.props.company) {
        const company = this.props.company;
        const companyImgURL = company.photo ? company.photo : companyimageurl;
        cardDisplay = (
          <div className="Card">
            <div className="img-job-info">
              <img className="Card-img" src={companyImgURL} alt="company-img" />
              <div className="job-info">
                <Link to="#" className="company-name">
                  <strong>{company.name.toLowerCase()}</strong>
                </Link>
                <p>
                  Email: <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
              </div>
            </div>
            <button className="viewButton">View</button>
          </div>
        );
      } else {
        cardDisplay = <h2>No Results</h2>;
      }
    }

    if (this.props.type === 'job-results') {
      if (this.props.job) {
        const job = this.props.job;
        cardDisplay = (
          <div className="jobCard">
            <div className="img-job-info">
              <div className="job-result-info">
                <h3 id="job-result-title">{job.title.toUpperCase()}</h3>

                <Link to="#">
                  <strong>@{job.company}</strong>
                </Link>
                <p id="equity-salary">
                  <span id="equity">Equity: {job.equity} </span> Salary: ${
                    job.salary
                  }
                </p>
              </div>
            </div>
            {!this.props.currentUser.applied_to.includes(job.id) ? (
              <button
                className="applyButton"
                onClick={() => this.handleApply(job.id)}
              >
                Apply
              </button>
            ) : (
              <button className="appliedButton">Applied</button>
            )}
          </div>
        );
      } else {
        cardDisplay = <h2>No Results</h2>;
      }
    }

    return <div>{cardDisplay}</div>;
  }
}

Card.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object,
  currentUser: PropTypes.object
};
export default Card;
