import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { makeChoice } from './actions';

class Player extends PureComponent {

  constructor(props) {
    super(props);
    const { computer, rock, paper, scissors } = props;

    if(!computer) {
      this.keys = {
        [rock]: 'rock',
        [paper]: 'paper',
        [scissors]: 'scissors'
      };
    }
  }
  componentDidMount() {
    if(this.props.computer) return;
    document.addEventListener('keypress', this.handleKey);
  }

  componentWillUnmount() {
    if(this.props.computer) return;
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
    const { index, rock, paper, scissors, choice, winner, computer } = this.props;

    const choiceMade = !!choice;
    const hasWinner = winner !== null;

    const player = {
      playerNumber: computer ? 'computer' : index + 1
    };

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
    else if(computer) {
      return (
        <PlayerCard {...player}>
          <div>Thinking...</div>
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
        {children}
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