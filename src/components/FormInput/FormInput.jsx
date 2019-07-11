import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

class FormInput extends Component {
  state = {
    error: false,
  };

  componentDidMount() {
    console.log('did', this.props.onChange);
  }

  render() {
    const {
      name,
      type,
      onChange,
      value,
      error,
    } = this.props;
    const isError = this.state.error ? 'error' : '';
    const errorField = this.state.error ? (<span className="error-msg">{error}</span>) : null;
    return (
      <div className="input-group">
        <span className="label">{name}</span>
        <input id={name} type={type} className={`input ${isError}`} value={value} onChange={onChange} />
        {errorField}
      </div>
    );
  }
}

FormInput.propTypes = propTypes;

export default FormInput;
