import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';
import Sources from './Sources';

export default class Search extends Component {

  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  state = {
    topic: '',
    sources: []
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch({ ...this.state });
  };

  handleTopic = ({ target }) => {
    this.setState({ topic: target.value });
  };

  handleSources = sources => {
    this.setState({ sources });
  };

  render() {
    const { topic } = this.state;

    return (
      <form className={styles.search} onSubmit={this.handleSubmit}>
        <label>
          Search For:&nbsp;
          <input value={topic} onChange={this.handleTopic}/>
        </label>
        <Sources onSelect={this.handleSources}/>
        <button>Search</button>
      </form>
    );
  }
}