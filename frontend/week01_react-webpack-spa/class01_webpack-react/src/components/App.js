import React, { Component } from 'react';
import faker from 'faker';
import cowsay from 'cowsay-browser';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';
import './App.css';

export default class App extends Component {

  state = {
    content: 'Helloooo... pick a cow!',
    image: 'http://www.kickvick.com/wp-content/uploads/2015/09/cutest-bunny-rabbits-a-31.jpg',
    cows: []
  };
  
  componentDidMount() {
    cowsay.list((err, cows) => {
      this.setState({ 
        cows, 
        current: 'cow'
      });
    });
  }

  setCow = ({ target }) => {
    this.setState({ current: target.value });
  };

  setImage = ({ target }) => {
    this.setState({ image: target.value });
  };

  generateText = () => {
    let cow = this.state.current || 'cow';
    let cowSaid = cowsay.say({
      text: faker.random.words(4), 
      f: cow
    });

    this.setState({ content: cowSaid });
  };

  export = () => {
    dom2image.toBlob(this.section).then(blob => {
      fileSaver.saveAs(blob, 'cute-cowsay.png');
    });
  };

  render() {
    const { cows, content, image } = this.state;

    return (
      <div className="App">

        <header>
          <h1 className="App-title">Generate Cowsay Lorem</h1>
        </header>

        <p className="intro">

          <select onChange={this.setCow}>
            <option>choose a cow</option>
            {cows.map((cow, index) => (
              <option value={cow} key={index}>{cow}</option>
            ))}
          </select>
        
          <button onClick={this.generateText}>then click me!</button>

        </p>

        <p>
          Background Image:&nbsp;
          <input name="url" defaultValue={image} onChange={this.setImage}/>
        </p>

        <section 
          ref={node => this.section = node}
          style={{ backgroundImage: `url(${image})` }}
        >
          <pre>{content}</pre>
        </section>

        <button onClick={this.export}>Export</button>

      </div>
    );
  }
}