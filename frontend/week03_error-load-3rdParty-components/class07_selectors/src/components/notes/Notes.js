import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote, loadNotes } from './actions';
import { filteredNotesSelector } from './reducers';
import Note from './Note';
import ItemForm from '../common/ItemForm';
import Filter from './Filter';

class Notes extends Component {
  
  componentDidMount() {
    const { user, loadNotes } = this.props;
    loadNotes(user);
  }

  render() {
    const { notes, addNote, user } = this.props;
    return (
      <div>
        <h2>Notes</h2>
        <Filter/>
        <section>
          <ItemForm onEdit={note => addNote(user, note)}/>
        </section>
        <ul>
          {notes.map(note => <Note key={note.id} {...note}/>)}
        </ul>
      </div>);
  }
}


export default connect(
  // map state to props
  (state, props) => ({ 
    notes: filteredNotesSelector(state),
    user: props.match.params.user
  }),
  // map dispatch to props
  { addNote, loadNotes }
)(Notes);
