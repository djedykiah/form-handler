import React from 'react';
import { Link } from 'react-router-dom';
import FormWrapper from '../FormWrapper';
import FormLegend from '../FormLegend';
import FormInput from '../FormInput';


const Login = () => (
  <FormWrapper render={() => (
    <form>
      <FormLegend value="Вход в систему" />
      <FormInput
        label="name"
        name="name"
        errorMessage="invalid name"
        type="text"
      />
      <FormInput
        label="password"
        name="password"
        errorMessage="invalid password"
        type="password"
      />
      <button className="btn" type="submit">Войти</button>
      <hr />
      <Link className="btn link" to="/register">Зарегистрироваться</Link>
    </form>
  )}
  />

);


export default Login;
