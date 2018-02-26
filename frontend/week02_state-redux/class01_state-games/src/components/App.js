import React, { Component } from 'react';
import './App.css';
import { rooms, start } from './rooms';
import Player from './Player';
import Room from './Room';

export default class App extends Component {

  state = {
    rooms,
    room: start,
    player: {
      name: 'player',
      inventory: []
    }
  };

  handleMove = roomKey => {
    this.setState({
      room: this.state.rooms[roomKey]
    });
  };

  handleItem = item => {
    const { room, player } = this.state;
    const index = room.items.indexOf(item);
    room.items.splice(index, 1);
    player.inventory.push(item);
    
    this.setState({
      room,
      player
    });
  };

  render() {
    const { player, room } = this.state;
    return (
      <div>
        <header>
          <h1>Shiitty Adventure</h1>
          <Player player={player}/>
        </header>
        <main>
          <Room room={room} 
            onMove={this.handleMove}
            onItem={this.handleItem}
          />
        </main>
      </div>
    );
  }
}