import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import styles from './Movies.css';

export default class Movies extends Component {
  
  static propTypes = {
    movies: PropTypes.array
  };

  render() {
    const { movies } = this.props;

    return (
      <ul className={styles.movies}>
        {movies.map(movie => <Movie key={movie.imdbID} {...movie}/>)}
      </ul>
    );
  }
}