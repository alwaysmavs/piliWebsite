import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { hashHistory } from 'react-router';
import App from './components/app.js';


const routers = (
  <Router history={hashHistory}>
    <Route path='/' components={ App }></Route>
  </Router>
);

export default routers;
