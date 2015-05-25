import React from 'react';
import {Route, DefaultRoute} from 'react-router';

// var ReactRouterProxy = require('react-router-proxy');

// export routes
export default (
  <Route handler={require('react-router-proxy!../components/app')}>
    <DefaultRoute handler={require('react-router-proxy!../pages/ProductsList/ProductsList')}/>
    <Route name='products' handler={require('react-router-proxy!../pages/ProductsList/ProductsList')}/>
  </Route>
);
