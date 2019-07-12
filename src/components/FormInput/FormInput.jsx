import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { race } from 'q';

const propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};




const FormInput = ({ name, type, onChange, value, error }) => {
  const isError = error ? 'error' : '';
  const errorField = error ? (<span className="error-msg">{error}</span>) : null;
  return (
    <div>



      <div className="input-group">
        <span className="label">{name}</span>
        <input id={name} type={type} className={`input ${isError}`} value={value} onChange={onChange} />
        {errorField}
      </div>

  
    </div>
  )
}



FormInput.propTypes = propTypes;

export default FormInput;
