import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovie } from '../../services/movieApi';
import { Link } from 'react-router-dom';

export default class MovieDetail extends Component {

  static propTypes = {
    imdbID: PropTypes.string.isRequired
  };

  state = {
    movie: null
  };

  componentDidMount() {
    getMovie(this.props.imdbID)
      .then(movie => this.setState({ movie }));
  }

  render() {
    const { movie } = this.state;

    if(movie === null) return null;

    return (
      <div>
        <Link to="/search">New Search</Link>
        <pre>{JSON.stringify(movie, true, 2)}</pre>
      </div>
    );
  }
}