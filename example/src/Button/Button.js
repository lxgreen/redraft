import React, { PropTypes } from 'react';

import './Button.css';

const Button = ({ label, handleClick }) => (
  <button className="Button" onClick={handleClick} >{label}</button>
);


Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
