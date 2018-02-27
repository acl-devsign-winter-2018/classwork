import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import About from '../about/About';
import Contact from '../contact/Contact';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="grid-wrap">
          <Header/>
          <main id="main-content" role="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Redirect to="/" />
            </Switch>
          </main>
          <footer id="main-footer">
            <small>&copy; 2018 this app.</small>
          </footer>
        </div>
      </Router>
    );
  }
}

class Home extends Component {
  render() {
    return <h1>Home page</h1>;
  }
}