/* eslint react/prop-types: off */
import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  state = {
    count: 1
  };

  handleMore = () => {
    this.setState(prev => {
      return { count: prev.count + 1 };
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>Hello React Components</h1>
        <button onClick={this.handleMore}>More!</button>
        <A number={count}/>
      </div>
    );
  }
}

class A extends Component {

  state = {
    expanded: false
  };

  render() {
    const { expanded } = this.state;
    const { number } = this.props;

    const expansion = expanded && <B fooinator={number}/>;

    return (
      <div>
        <div>I am an instance of Component A, my number is {number}</div>
        <span onClick={() => this.setState(prev => ({ expanded: !prev.expanded }))}>
          {expanded ? 'Close' : 'Open'}
        </span>
        {expansion}
      </div>
    );
  }
}

class B extends Component {
  render() {
    return <div>I am an instance of Component B my number is {this.props.fooinator}</div>;
  }
}