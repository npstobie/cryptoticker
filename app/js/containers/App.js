var React = require('react'),
    Component = require('react').Component,
    PropTypes = require('react').PropTypes,
    bindActionCreators = require('redux').bindActionCreators,
    connect = require('react-redux').connect,
    actions = require('../redux/actions.js'),
    Ticker = require('../components/Ticker.js'),
    TickerList = require('../components/TickerList.js');

// import React, { Component, PropTypes } from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import * as actions from '../redux/actions'
// import Ticker from '../components/Ticker'
// import TickerList from '../components/TickerList'

var App = React.createClass({

  render: function() {
    return (
      <div>
        <TickerList />
      </div>
    )
  }
});

var mapStateToProps = function (state) {
  return state;
};

var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
