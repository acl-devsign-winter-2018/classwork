import React, { Component } from 'react';

export default class Player extends Component {
  render() {
    const { player } = this.props;
    return (
      <div>
        <div>{player.name}</div>
        <ul>
          {player.inventory.map(item => <li key={item.key}>{item.description}</li>)}
        </ul>
      </div>
    );
  }
}