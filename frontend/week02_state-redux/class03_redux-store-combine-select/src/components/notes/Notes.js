import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from './actions';
import Note from './Note';
import NoteForm from './NoteForm';

class Notes extends Component {
  
  render() {
    const { notes, addNote } = this.props;
    return (
      <div>
        <h2>Notes</h2>
        <section>
          <NoteForm onEdit={addNote}/>
        </section>
        <ul>
          {notes.map(note => <Note key={note.id} {...note}/>)}
        </ul>
      </div>);
  }
}

export default connect(
  // map state to props
  state => ({ notes: state }),
  // map dispatch to props
  // this gets modified to work as expected,
  // more on the guts tomorrow
  { addNote }
)(Notes);
