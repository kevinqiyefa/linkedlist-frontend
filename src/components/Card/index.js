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
          <img className="Card-img" src={image} alt="company image" />
          <div>
            <p>
              {job.title}{' '}
              <Link to="#">
                <strong>@{job.company}</strong>
              </Link>
            </p>

            <p>
              {job.salary} | {job.equity}
            </p>
          </div>
          <button className="applyButton">Apply</button>
        </div>
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
