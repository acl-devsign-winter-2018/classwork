import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovie } from '../../services/movieApi';
// import { Link } from 'react-router-dom';

export default class MovieDetail extends Component {

  static propTypes = {
    imdbID: PropTypes.string.isRequired,
    history: PropTypes.object
  };

  state = {
    movie: null
  };

  componentDidMount() {
    getMovie(this.props.imdbID)
      .then(movie => this.setState({ movie }));
  }

  handleBack = event => {
    event.preventDefault();
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { movie } = this.state;

    if(movie === null) return null;

    return (
      <div>
        <a href="" onClick={this.handleBack}>Back</a>
        <pre>{JSON.stringify(movie, true, 2)}</pre>
      </div>
    );
  }
}