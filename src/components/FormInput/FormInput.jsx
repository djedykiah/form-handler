import React, { Component } from 'react';

export default class FormInput extends Component {
  state = {
    error: false,
  };

  render() {
    const { label, errorMessage, value, onChange } = this.props;
    const { error } = this.state;
    const isError = error ? 'error' : '';
    const errorField = error ? (<span className="error-msg">{errorMessage}</span>) : null;
    return (
      <div className="input-group">
        <label htmlFor="">{label}</label>
        <input  type="text" className={`input ${isError}`} value={value} onChange={onChange} />
        {errorField}
      </div>
    );
  }
}
