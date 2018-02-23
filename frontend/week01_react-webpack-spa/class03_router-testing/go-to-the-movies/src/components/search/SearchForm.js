import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.css';

export default class SearchForm extends Component {

  static propTypes = {
    searchTerm: PropTypes.string,
    onSearch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      current: props.searchTerm || ''
    };
  }

  componentWillReceiveProps({ searchTerm }) {
    if(searchTerm !== this.state.current) {
      this.setState({ current: searchTerm || '' });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { current } = this.state;
    if(!current) return;
    this.props.onSearch(current);
  };

  render() {
    const { current } = this.state;

    return (
      <form className={styles.search}
        onSubmit={this.handleSubmit}
      >
        <fieldset>
          <label>
            Search for Movies: <input value={current} 
              onChange={({ target }) => this.setState({ current: target.value })} 
              name="search" 
              placeholder="enter movie search"/>
          </label>
          <label>
            &nbsp;<button>Search</button>
          </label>
        </fieldset>
      </form>
    );
  }
}