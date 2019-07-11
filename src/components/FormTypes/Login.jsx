import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FormWrapper from '../FormWrapper';
import FormInput from '../FormInput';

class Login extends Component {
  state = {
    name: '',
    password: '',
    errors: {
      name: 'Invalid name',
      password: 'Invalid password',
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submited');
  };

  _handleChangeName = (event) => {
    const { value } = event.target;
    this.setState({
      name: value,
    });
  };

  render() {
    const { name, password, errors } = this.state;
    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit}>
          <legend>Вход в систему</legend>
          <FormInput
            name="name"
            value={name}
            error={errors.name}
            type="text"
            onChange={this._handleChangeName}
          />
          <FormInput
            name="password"
            value={password}
            error={errors.password}
            type="password"
            onChange={this.handleChange}
          />
          <button className="btn" type="submit">Войти</button>
          <hr />
          <Link className="btn link" to="/register">Зарегистрироваться</Link>
        </form>
      </FormWrapper>
    );
  }
}


export default Login;
