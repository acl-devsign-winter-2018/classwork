import React, { Component } from 'react';
import cowsay from 'cowsay-browser';
import faker from 'faker';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';
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
    this.handleBackground = this.handleBackground.bind(this);
    this.handleExport = this.handleExport.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
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

  handleBackground({ target }) {
    this.setState({
      background: target.value
    });
  }

  handleExport() {
    dom2image.toBlob(this.section).then(blob => {
      fileSaver.saveAs(blob, 'cute-cowsay.png');
    });
  }

  handleUpload({ target }) {
    const reader = new FileReader();

    reader.readAsDataURL(target.files[0]);
    
    reader.onload = () => {
      this.setState({ background: reader.result });
    };
  }

  render() {
    const { background, content, cows, current } = this.state;

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

          <label>
            Background: 
            <input name="url" onChange={this.handleBackground}/>
            <input type="file" onChange={this.handleUpload}/>
          </label>
        </p>

        <section 
          className="ipsum" 
          ref={node => this.section = node}
          style={{
            backgroundImage: background ? `url(${background})` : null
          }}
        >
          <pre>{cowSaid}</pre>
        </section>

        <section>
          <button onClick={this.handleExport}>Export</button>
        </section>

      </div>

    );
  }
}