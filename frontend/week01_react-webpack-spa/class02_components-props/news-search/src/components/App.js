import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  state = {
    results: null,
    total: 0,
    query: null,
    page: 1,
    loading: false
  };

  render() {
    // const { count } = this.state;

    return (
      <div>
        <header>
          Search Goes Here
        </header>
        <main>
          {/* <Search onSearch={}/> */}
          <div>Paging Goes Here</div>
          <div>List Goes Here</div>
        </main>
      </div>
    );
  }
}