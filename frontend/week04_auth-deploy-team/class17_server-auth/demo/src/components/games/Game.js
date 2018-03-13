import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { newGame } from './actions';
import Player from './Player';
import './Game.css';

class Game extends PureComponent {

  render() {
    const { games, newGame, lastMatch } = this.props;

    return (
      <section>
        <div className="game">
          <Player index={0} rock="a" paper="s" scissors="d"/>
          <Player index={1} computer="true"/>
        </div>
        <div>
          { lastMatch && (
            <div>
              <p>Score: {lastMatch.score}; Games: {lastMatch.games}</p>
              <button onClick={newGame}>New Match</button> 
            </div>
          )}
        </div>
        <ul>
          {games.map(({ result, selections }, index) => (
            <li key={index}>
              {selections[0]}&nbsp;
              {result === 3 ? 'TIE' : result === 0 ? 'WIN' : 'LOSS'}&nbsp;
              {selections[1]}&nbsp;
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default connect(
  ({ winner, games, lastMatch }) => ({ winner, games, lastMatch }),
  { newGame }
)(Game);