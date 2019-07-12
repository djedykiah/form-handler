import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element.isRequired,
};


const FormWrapper = props => (
  <div className="form-container">
    {
      props.children
    }
  </div>
); 

FormWrapper.propTypes = propTypes;

export default FormWrapper;
