import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { makeChoice } from './actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Player extends PureComponent {

  constructor(props) {
    super(props);
    const { rock, paper, scissors } = props;

    this.keys = {
      [rock]: 'rock',
      [paper]: 'paper',
      [scissors]: 'scissors'
    };
  }
  componentDidMount() {
    document.addEventListener('keypress', this.handleKey);
  }

  stopListening() {
    document.removeEventListener('keypress', this.handleKey);
  }

  handleKey = ({ key }) => {
    const { index, makeChoice, choiceMade } = this.props;
    if(choiceMade) return;

    const selection = this.keys[key];
    if(!selection) return;

    makeChoice(index, selection);
  };

  render() {
    const { index, rock, paper, scissors, choice, winner } = this.props;

    const choiceMade = !!choice;
    const hasWinner = winner !== null;

    const player = {
      playerNumber: index + 1
    };

    console.log('Player render()', index, winner, choice);

    if(hasWinner) {
      return (
        <PlayerCard {...player}>
          <div>
            <div key="win">{choice}</div>
            <div>{winner === 3 ? 'TIE' : winner === index ? 'WON' : 'LOST'}</div>
          </div>
        </PlayerCard>
      );
    }
    else if(choiceMade) {
      return (
        <PlayerCard {...player}>
          <div key="choice-made">selection made</div>
        </PlayerCard>
      );
    }
    else {
      return (
        <PlayerCard {...player}>
          <ul key="choose" className="key-list">
            <li><kbd>{rock}</kbd> ROCK</li>
            <li><kbd>{paper}</kbd> PAPER</li>
            <li><kbd>{scissors}</kbd> SCISSORS</li>
          </ul>
        </PlayerCard>
      );  
    }
     
  }
}

function PlayerCard({ winLoseTie, playerNumber, children }) {
  return (
    <div className="player">
      <h3>Player {playerNumber}</h3>
      <div className="wrapper">
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {children}
        </ReactCSSTransitionGroup>
      </div>
      {winLoseTie}
    </div>
  );
}

export default connect(
  ({ selections, winner }, { index }) => ({
    choice: selections[index],
    winner
  }),
  { makeChoice }
)(Player);