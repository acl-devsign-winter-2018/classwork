import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Game from '../game/Game';

import './App.css';

export default class App extends Component {
  
  render() {

    return (
      <Router>
        <div>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Welcome}/>
              <Route path="/game" component={Game}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}