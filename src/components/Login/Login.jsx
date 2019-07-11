import React from 'react';

import FormLegend from '../FormLegend';
import FormInput from '../FormInput';

const Login = () => (
  <div>
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
  </div>
);


export default Login;
