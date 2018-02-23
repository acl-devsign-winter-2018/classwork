import React, { Component } from 'react';
import Movies from '../movies/Movies';
import SearchForm from '../search/SearchForm';
import { search } from '../../services/movieApi';
import PropTypes from 'prop-types';
import queryString from 'query-string';

const getSearch = location => location ? location.search : '';

export default class Search extends Component {
  
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  state = {
    movies: null,
    error: null,
    searchTerm: ''
  };

  componentDidMount() {
    this.searchFromQuery(this.props.location.search);
  }

  componentWillReceiveProps({ location }) {
    const next = getSearch(location);
    const current = getSearch(this.props.location);
    if(current === next) return;
    this.searchFromQuery(next);
  }
  
  searchFromQuery(query) {
    const { search: searchTerm } = queryString.parse(query);
    this.setState({ searchTerm });
    if(!searchTerm) return;

    search(searchTerm)
      .then(({ Search }) => {
        this.setState({ movies: Search });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  handleSearch = searchTerm => {
    this.setState({ error: null });
    
    this.props.history.push({
      search: searchTerm ? queryString.stringify({ search: searchTerm }) : ''
    });
  };
  
  render() {
    const { movies, error, searchTerm } = this.state;

    return (
      <div>
        <SearchForm searchTerm={searchTerm} onSearch={this.handleSearch}/>
        {error && <div>{error}</div>}
        {(!error && movies) && <Movies movies={movies}/>}
      </div>
    );
  }
}