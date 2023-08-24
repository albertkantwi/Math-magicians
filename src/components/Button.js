import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ data }) => (
  <div className="row">
    <span className="full">{data}</span>
  </div>
);

Button.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Button;
