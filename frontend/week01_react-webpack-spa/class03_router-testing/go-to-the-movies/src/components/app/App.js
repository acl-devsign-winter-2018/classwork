import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

export default class App extends Component {
  static propTypes = {
    home: PropTypes.bool
  };
  
  render() {
    return (
      <div>
        { this.props.home ? <Home/> : null }
      </div>
    );
  }
}

export class Home extends Component {
  render() {
    return <div>I am the HOME page!</div>;
  }
}