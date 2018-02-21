import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';

export default class Search extends Component {

  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };


  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(event.target.elements.search.value);
  };

  render() {
    return (
      <form className={styles.search}
        onSubmit={this.handleSubmit}
      >
        <fieldset>
          <label>
            Search for Movies: <input name="search" placeholder="enter movie search"/>
          </label>
          <label>
            &nbsp;<button>Search</button>
          </label>
        </fieldset>
      </form>
    );
  }
}