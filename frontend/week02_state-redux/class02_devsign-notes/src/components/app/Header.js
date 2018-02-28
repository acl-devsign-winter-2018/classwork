import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './React-icon.svg';

export default class Header extends Component {
  render() {
    return (
      <header id="main-header">
        <img src={logo} id="logo" alt="without valid alt description, eslint-plugin-jsx-a11y complains!" />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}