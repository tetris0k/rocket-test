import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './App';

export default (
  <div>
    <Route path='/' component={App} />
    <Redirect from='*' to='/' />
  </div>
)