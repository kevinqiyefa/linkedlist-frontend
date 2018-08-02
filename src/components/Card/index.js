import React, { Component } from 'react';
import PropTypes from 'prop-types';
import image from '../../images/company_placeholder.png';
import { Link } from 'react-router-dom';
import './style.css';
class Card extends Component {
  render() {
    const job = this.props.data;
    let cardDisplay;
    if (this.props.type === 'jobs') {
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
                {job.salary} | {job.equity}
              </p>
            </div>
          </div>
          <button className="applyButton">Apply</button>
        </div>

        // <div className="Card">
        //   <div className="img-info">
        //     <img className="Card-img" src={image} alt="company image" />
        //     <span>
        //       {job.title}{' '}
        //       <Link to="#">
        //         <strong>@{job.company}</strong>
        //       </Link>
        //     </span>

        //     <span>
        //       {job.salary} | {job.equity}
        //     </span>
        //   </div>
        //   <button className="applyButton">Apply</button>
        // </div>
      );
    }

    return <div>{cardDisplay}</div>;
  }
}

Card.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object
};
export default Card;
