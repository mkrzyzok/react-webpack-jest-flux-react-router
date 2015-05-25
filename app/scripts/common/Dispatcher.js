"use strict";

var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

var EventEmitter = require('./Emitter');

AppDispatcher.register( function( payload ) {

  switch( payload.eventName ) {
    case 'testCase':
      EventEmitter.emit('testCase');
      break;
  }

  return true; // Needed for Flux promise resolution
});

module.exports = AppDispatcher;
