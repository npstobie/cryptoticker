var React = require('react');
var ReactDOM = require('react-dom');
var redux = require('react-redux');
var App = require('../containers/App.js');

var initialState = {
  todos: [{
    id: 0,
    text: 'Learn how to use react and redux'
  }]
}

var store = require('../redux/store.js')(initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
