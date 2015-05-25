import React from 'react';
import Router from 'react-router';
import routes from './scripts/common/routes';
var AppDispatcher = require('./scripts/common/Dispatcher');
var EventEmitter = require('./scripts/common/Emitter');

require('./styles/main.sass');

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('content'));
});

