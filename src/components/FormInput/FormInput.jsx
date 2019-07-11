import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

class FormInput extends Component {
  state = {
    error: false,
    value: '',
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { label, errorMessage, type } = this.props;
    const { error, value } = this.state;
    const isError = error ? 'error' : '';
    const errorField = error ? (<span className="error-msg">{errorMessage}</span>) : null;
    return (
      <div className="input-group">
        <label htmlFor={label}>{label}</label>
        <input id={label} type={type} className={`input ${isError}`} value={value} onChange={this.onChange} />
        {errorField}
      </div>
    );
  }
}

FormInput.propTypes = propTypes;

export default FormInput;
