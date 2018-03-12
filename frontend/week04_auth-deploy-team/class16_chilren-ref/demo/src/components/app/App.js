import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { newGame, loadGameHistory } from './actions';
import Player from './Player';
import './App.css';
import './fade.css';

class App extends PureComponent {

  componentDidMount() {
    // this.nameInput.focus();
    this.props.loadGameHistory();
  }

  render() {
    const { winner, games, newGame } = this.props;

    return (
      <section>
        <input name="name" ref={node => this.nameInput = node}/>
        <div className="game">
          <Player index={0} rock="a" paper="s" scissors="d"/>
          <Player index={1} rock="l" paper=";" scissors="'"/>
        </div>
        <div>{ winner !== null && <button onClick={newGame}>New Game</button> }</div>
        <ul>
          {games.map(({ timestamp, result }) => (
            <li key={timestamp}>
              <time>{timestamp.toLocaleString()}</time>
              { result === 3 ? 'TIE' : result === 0 ? 'PLAYER 1' : 'PLAYER 2'}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default connect(
  ({ winner, games }) => ({ winner, games }),
  { newGame, loadGameHistory }
)(App);