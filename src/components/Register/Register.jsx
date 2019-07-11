import React from 'react';
import FormLegend from '../FormLegend';
import FormInput from '../FormInput';

const Register = () => (
  <form>
    <FormLegend value="Регистрация" />
    <FormInput
      label="email"
      name="email"
      errorMessage="invalid email"
      type="text"
    />
    <FormInput
      label="password"
      name="password"
      errorMessage="invalid password"
      type="password"
    />
    <FormInput
      label="repeat password"
      name="passwordrepeat"
      errorMessage="passwords do not match"
      type="password"
    />
    <button className="btn" type="submit">Зарегистрироваться</button>
    <hr />
    <button className="btn link" type="submit">Войти</button>
  </form>
);

export default Register;
