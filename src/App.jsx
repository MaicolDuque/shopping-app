import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        component={Home}
      />
      <Route
        path="/product/:id"
        exact
        component={Detail}
      />
      <Route
        path="/login"
        exact
        component={Login}
      />
      <Route
        path="/register"
        exact
        component={Register}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;