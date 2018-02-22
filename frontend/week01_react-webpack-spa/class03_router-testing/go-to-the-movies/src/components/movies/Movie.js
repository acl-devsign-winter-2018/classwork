import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.css';

export default class Movie extends Component {
  
  static propTypes = {
    imdbID: PropTypes.string,
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string,
  };

  render() {
    const { imdbID, Poster, Title, Year } = this.props;

    return (
      <li className={styles.movie}>
        <Link to={`/movies/${imdbID}`}>
          <h2>{Title}</h2>
          <p>Released {Year}</p>
          <img alt={Title} src={Poster}/>
        </Link>
      </li>
    );
  }
}