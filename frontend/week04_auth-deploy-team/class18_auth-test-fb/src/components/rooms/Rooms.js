import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addRoom, loadRooms } from './actions';

class Rooms extends PureComponent {

  componentDidMount() {
    this.props.loadRooms();
  }

  handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    this.props.addRoom(name);
  };

  render() {
    const { rooms } = this.props;

    return (
      <div>
        <h1>Rooms</h1>
        <ul>
          {rooms.map(room => (
            <li key={room.key}>{room.name}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input name="name" required/>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default connect(
  ({ rooms }) => ({ rooms }),
  { addRoom, loadRooms }
)(Rooms);