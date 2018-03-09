import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { makeChoice } from './actions';

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
    // listen for keypress
    document.addEventListener('keypress', this.handleKey);
  }

  stopListening() {
    // unsubscribe keypress
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

    let display;
    const choiceMade = !!choice;
    const hasWinner = winner !== null;
  
    if(hasWinner) {
      display = <div>{choice}</div>;
    }
    else {
      display = choiceMade 
        ? <div>selection made</div>
        : <div>
          <span><kbd>{rock}</kbd> ROCK</span>
          <span><kbd>{paper}</kbd> PAPER</span>
          <span><kbd>{scissors}</kbd> SCISSORS</span>
        </div>;
    }
     
    return (
      <div className="player">
        <h3>Player {index + 1}</h3>
        {display}
        { hasWinner && <div>{winner === 3 ? 'TIE' : winner === index ? 'WON' : 'LOST'}</div> }
      </div>
    );
  }
}

export default connect(
  ({ selections, winner }, { index }) => ({
    choice: selections[index],
    winner
  }),
  { makeChoice }
)(Player);