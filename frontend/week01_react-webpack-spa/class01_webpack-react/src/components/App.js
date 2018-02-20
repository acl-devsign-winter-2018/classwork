import React, { Component } from 'react';
import cowsay from 'cowsay-browser';
import './App.css';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      content: 'Hellloooo, pick a cow!',
      cows: [],
      current: 'cow'
    };
  }

  componentDidMount() {
    cowsay.list((err, cows) => {
      this.setState({ cows });
    });
  }

  handleCowChange({ target }) {
    this.setState({ current: target.value || 'cow' });
  }

  render() {
    const { content, cows, current } = this.state;

    const cowSaid = cowsay.say({
      text: content, 
      f: current
    });

    return (
      <div className="App">

        <header>
          <h1 className="App-title">Generate Cowsay Lorem</h1>
        </header>

        <p>
          <select onChange={event => this.handleCowChange(event)}>
            <option value="">Choose a Cow</option>
            {cows.map((cow, index) => (
              <option value={cow} key={index}>{cow}</option>
            ))}
          </select>
        </p>

        <section>
          <pre>{cowSaid}</pre>
        </section>

      </div>

    );
  }
}