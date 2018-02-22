import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movies from '../movies/Movies';
import Search from '../search/Search';
import { search } from '../../services/movieApi';

import './App.css';

export default class App extends Component {
  
  static propTypes = {
    home: PropTypes.bool
  };

  state = {
    movies: null,
    error: null
  };

  handleSearch = searchTerm => {
    this.setState({ error: null });

    search(searchTerm)
      .then(({ Search }) => {
        this.setState({ movies: Search });
      })
      .catch(error => {
        this.setState({ error });
      });
  };
  
  render() {
    const { movies, error } = this.state;

    return (
      <div>
        <Search onSearch={this.handleSearch}/>
        {error && <div>{error}</div>}
        {(!error && movies) && <Movies movies={movies}/>}
      </div>
    );
  }
}