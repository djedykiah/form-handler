import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Login from './FormTypes/Login';
import Register from './FormTypes/Register';

const App = () => (
  <div className="wrapper">
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  </div>
);

export default App;
