import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Loading from './Loading';
import Notes from '../notes/Notes';
import Users from '../users/Users';


export default class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <main>
            <Loading/>
            <Switch>
              <Route exact path="/users" component={Users}/>
              <Route path="/users/:id/:foo" render={({ match, location, history }) => {
                console.log(match);
                return null;
              }}/>
              <Route path="/notes/:user" component={Notes}/>
              <Redirect to="/users"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
