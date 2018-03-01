import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeComment } from './actions';

class Comment extends Component {
  render() {
    const { id, text, noteId, removeComment } = this.props;

    return (
      <li>
        {text}
        <button onClick={() => removeComment(id, noteId)}>X</button>
      </li>
    );
  }
}

export default connect(
  null,
  { removeComment }
)(Comment);