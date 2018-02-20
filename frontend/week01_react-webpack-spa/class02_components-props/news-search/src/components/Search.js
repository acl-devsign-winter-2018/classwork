import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {

  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  state = {
    search: '',
    name: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { category, name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="category" value={category} onChange={this.handleChange}/>
        <input name="name" value={name} onChange={this.handleChange}/>
        <button>Search</button>
        <pre>{JSON.stringify(this.state, true, 2)}</pre>
      </form>
    );
  }
}