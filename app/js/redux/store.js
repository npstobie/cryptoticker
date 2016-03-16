var applyMiddleware = require('redux').applyMiddleware,
		compose = require('redux').compose,
		createStore = require('redux').createStore,
		reducer = require('./reducer.js'),
		logger = require('redux-logger'),
		thunk = require('redux-thunk').thunk;

// import { applyMiddleware, compose, createStore } from 'redux';
// import reducer from './reducer.js';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';

var finalCreateStore = compose(
  applyMiddleware(thunk, logger())
)(createStore);

var configureStore = function(initialState) {
  initialState = initialState || {text: []}
  return finalCreateStore(reducer, initialState);
};

module.exports = configureStore;