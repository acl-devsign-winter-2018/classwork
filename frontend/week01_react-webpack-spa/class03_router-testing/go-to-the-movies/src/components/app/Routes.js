import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/A" component={A}/>
        <Route path="/B" component={B}/>
        <Route path="/C" component={C}/>
      </Switch>
    );
  }
}

export class Home extends Component {
  render() {
    return <div>I am the home page!</div>;
  }

}

export class A extends Component {
  render() {
    return <div>I am A!</div>;
  }
}

export class B extends Component {
  render() {
    return <div>I am B!</div>;
  }
}

export class C extends Component {
  render() {
    return <div>I am C!</div>;
  }
}