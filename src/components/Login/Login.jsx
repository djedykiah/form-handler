import React, { Component } from 'react';

import FormLegend from '../FormLegend';
import FormInput from '../FormInput';

export default class Login extends Component {
  state = {
    name: '',
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <FormLegend value="Вход в систему" />
        <FormInput
          label="name"
          name="name"
          errorMessage="invalid name"
          value={name}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
