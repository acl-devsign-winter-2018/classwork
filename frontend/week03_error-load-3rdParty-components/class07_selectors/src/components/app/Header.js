import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Error from './Error';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Note App</h1>
        <nav>
          <ul>
            <li><Link to="/users">users</Link></li>
            <li><Link to="/notes">notes</Link></li>
          </ul>
        </nav>
        <Error/>
      </header>
    );
  }
}