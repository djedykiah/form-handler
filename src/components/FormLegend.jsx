import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string.isRequired,
};

const FormLegend = ({ value }) => (
  <h2>
    { value }
  </h2>
);

FormLegend.propTypes = propTypes;


export default FormLegend;
