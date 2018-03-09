import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { newGame } from './actions';
import Player from './Player';
import './App.css';

class App extends PureComponent {

  render() {
    const { winner, newGame } = this.props;

    return (
      <section>
        <div className="game">
          <Player index={0} rock="a" paper="s" scissors="d"/>
          <Player index={1} rock="l" paper=";" scissors="'"/>
        </div>
        <div>{ winner !== null && <button onClick={newGame}>New Game</button> }</div>
      </section>
    );
  }
}

export default connect(
  ({ winner }) => ({ winner }),
  { newGame }
)(App);