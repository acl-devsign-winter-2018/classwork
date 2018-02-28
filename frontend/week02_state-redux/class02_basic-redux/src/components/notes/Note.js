import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNote, removeNote } from './actions';
import NoteForm from './NoteForm';

class Note extends Component {

  state = {
    editing: false
  };

  handleEdit = note => {
    this.props.updateNote(note);
    this.setState({ editing: false });
  };

  handleToggleEdit = () => {
    this.setState(prev => ({
      editing: !prev.editing
    }));
  };

  render() {
    // remember to use the injected prop for dispatch, 
    // not the imported action creator
    const { id, timestamp, text, removeNote } = this.props;
    const { editing } = this.state;

    return (
      <li>
        {editing ? 
          <NoteForm id={id} text={text} onEdit={this.handleEdit}/> :
          <p><time>{timestamp.toLocaleString()}</time> - {text}</p>
        }
        <button onClick={this.handleToggleEdit}>
          {editing ? 'cancel' : '✎'}
        </button>
        <button onClick={() => removeNote(id)}>X</button>
      </li>
    );
  }
}

export default connect(
  null,
  { updateNote, removeNote }
)(Note);