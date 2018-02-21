import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Movie.css';

export default class Movie extends Component {
  
  static propTypes = {
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string,
  };

  render() {
    const { Poster, Title, Year } = this.props;

    return (
      <li className={styles.movie}>
        <h2>{Title}</h2>
        <p>Released {Year}</p>
        <img alt={Title} src={Poster}/>
      </li>
    );
  }
}