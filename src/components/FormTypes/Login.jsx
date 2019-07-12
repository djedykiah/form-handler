import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { nameValidator, passwordValidator } from '../helpers';

import FormWrapper from '../FormWrapper';
import FormInput from '../FormInput';

class Login extends Component {
  state = {
    name: '',
    password: '',
    isSubmited: false,
    nameError: false,
    passError: false,
    errors: {
      name: 'Invalid name',
      password: 'Invalid password',
    },
  };

  _toggleErrorName = () => {
    this.setState({
      nameError: !this.state.name,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      name,
      password,
      nameError,
      passError,
      isSubmited,
    } = this.state;

    if (isSubmited) {
      console.log('form submited');
      return;
    }

    if (nameError && passError) {
      this.setState({
        isSubmited: true,
      });
    }
  

    if (nameValidator(name)) {
      this.setState({
        nameError: false,
      });
    } else {
      this.setState({
        nameError: true,
      });
    }


    if (passwordValidator(password)) {
      this.setState({
        passError: true,
      });
    } else {
      this.setState({
        passError: false,
      });
    }
  }; 



  _handleChangeName = (event) => {
    const { value } = event.target;
    this.setState({
      name: value,
    });
  };

  _handleChangePassword = (event) => {
    const { value } = event.target;
    this.setState({
      password: value,
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
            onChange={this._handleChangePassword}
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
