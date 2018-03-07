import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadUsers } from './actions';

class Users extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <h2>Users</h2>
        <ul>
          {users.map(user => (
            <li key={user}><Link to={`/notes/${user}`}>{user}</Link></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ users: state.users }),
  { loadUsers }
)(Users);