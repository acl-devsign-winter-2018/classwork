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
          <img alt={Title} src={Poster}/>
          <h3>{Title}</h3>
          <p>Released {Year}</p>
        </Link>
      </li>
    );
  }
}