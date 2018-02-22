import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
            <Route path="/movies" render={() => <li>only on movies!</li>}/>
          </ul>
        </nav>
      </header>
    );
  }
}
