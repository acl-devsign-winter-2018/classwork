import React, { Component } from 'react';
import './Room.css';

const directions = {
  e: 'East',
  w: 'West',
  n: 'North',
  s: 'South'
};

export default class Room extends Component {
  render() {
    const { room, onMove, onItem } = this.props;
    const { title, description, image, doors, items } = room;

    return (
      <div className="room" style={{ backgroundImage: `url(${image})` }}>
        <h2>{title}</h2>
        <p>{description}</p>
        { items.length > 0 && (
          <div>
            <h3>You see:</h3>
            <ul>
              {items.map(item => (
                <li key={item.key}>
                  <button onClick={() => onItem(item)}>{item.description}</button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <h3>Doors</h3>
        <ul className="doors">
          {Object.keys(doors).map(key => (
            <li key={key}>
              <button onClick={() => onMove(doors[key])}>{directions[key]}</button>              
            </li>
          ))}
        </ul>
      </div>
    );
  }
}