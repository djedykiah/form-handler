import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../FormInput';
import FormWrapper from '../FormWrapper';

const Register = () => (
  <FormWrapper>
    <form>
      <legend>Регистрация</legend>
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
      <Link className="btn link" to="/login">Войти</Link>
    </form>
  </FormWrapper>
);

export default Register;
