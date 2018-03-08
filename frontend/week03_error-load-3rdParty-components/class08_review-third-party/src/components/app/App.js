import React, { Component } from 'react';
import Albums from '../albums/Albums';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Hello Actions</h1>
        <Albums/>
        <p>Some text in a paragraph</p>
      </div>
    );
  }
}

export default App;