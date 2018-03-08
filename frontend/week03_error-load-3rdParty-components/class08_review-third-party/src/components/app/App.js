import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Albums from '../albums/Albums';
import AlbumDetail from '../albums/AlbumDetail';

class App extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <h1>Hello Actions</h1>
          <Switch>
            <Route exact path="/albums" component={Albums}/>
            <Route path="/albums/:id" component={AlbumDetail}/>
            <Redirect to="/albums"/>
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;