import React, { Component } from 'react';
import './ChooseItems.css';

export default class ChooseItems extends Component {
  render() {
    const { items, onItem } = this.props;
    if(!items || items.length === 0) return null;

    return (
      <ul className="items">
        {items.map(item => (
          <li key={item.key}>
            <button onClick={() => onItem(item)}>{item.description}</button>
          </li>
        ))}
      </ul>   
    );
  }
}