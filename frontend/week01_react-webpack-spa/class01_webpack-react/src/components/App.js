import React, { Component } from 'react';
import cowsay from 'cowsay-browser';
import faker from 'faker';
import './App.css';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      content: 'Hellloooo, pick a cow! Or generate some fake data!',
      cows: [],
      current: 'cow'
    };

    this.handleCowChange = this.handleCowChange.bind(this);
    this.handleFakeData = this.handleFakeData.bind(this);
  }

  componentDidMount() {
    cowsay.list((err, cows) => {
      this.setState({ cows });
    });
  }

  handleCowChange({ target }) {
    this.setState({ 
      current: target.value || 'cow' 
    });
  }

  handleFakeData() {
    this.setState({
      content: faker.random.words(4)
    });
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
          <label>
            Choose a Cow:
            <select onChange={this.handleCowChange}>
              <option value="">Choose a Cow</option>
              {cows.map((cow, index) => (
                <option value={cow} key={index}>{cow}</option>
              ))}
            </select>
          </label>

          <label>
            Fake Ipsum: <button onClick={this.handleFakeData}>Generate</button>
          </label>
        </p>

        <section>
          <pre>{cowSaid}</pre>
        </section>

      </div>

    );
  }
}