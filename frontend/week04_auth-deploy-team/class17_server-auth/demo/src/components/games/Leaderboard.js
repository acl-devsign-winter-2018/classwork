import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadMatches } from './actions';

class GameHistory extends PureComponent {

  componentDidMount() {
    this.props.loadMatches();
  }

  render() {
    const { matches } = this.props;

    if(!matches) return null;

    return (
      <section>
        <h2>Game History</h2>
        { matches.length 
          ? 
          <ul>
            {matches.map(match => (
              <li key={match.key}>Score: {match.score}; Games: {match.games}</li>
            ))}
          </ul>
          :
          <div>No matches played</div>
        }
      </section>
    );
  }
}

export default connect(
  ({ matches }) => ({ matches }),
  { loadMatches }
)(GameHistory);