var React = require('react');
var Ticker = require('./Ticker');

var TickerList = React.createClass({
	render: function() {
		return (
			<div className="ticker-container">
				<h1>TickerList</h1>
				<Ticker />
			</div>
		)
	}
})

module.exports = TickerList;