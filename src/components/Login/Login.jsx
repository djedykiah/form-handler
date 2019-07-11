import React from 'react';

import FormLegend from '../FormLegend';
import FormInput from '../FormInput';

const Login = () => (
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
    <button className="btn link" type="submit">Зарегистрироваться</button>
  </form>
);


export default Login;
