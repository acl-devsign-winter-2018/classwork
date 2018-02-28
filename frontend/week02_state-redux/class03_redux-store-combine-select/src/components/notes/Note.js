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
          <div>
            <NoteForm id={id} text={text} onEdit={this.handleEdit}/> 
            <button onClick={this.handleToggleEdit}>cancel</button>
          </div>
          :
          <article>
            <p>
              {text}
              &nbsp;<button onClick={() => removeNote(id)}>X</button>
            </p>
            <time>{timestamp.toLocaleDateString()}</time>
            <button onClick={this.handleToggleEdit}>✎</button>
          </article>
        }
        
        
      </li>
    );
  }
}

export default connect(
  null,
  { updateNote, removeNote }
)(Note);