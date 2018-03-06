import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote, loadNotes } from './actions';
import Note from './Note';
import ItemForm from '../common/ItemForm';

class Notes extends Component {
  
  componentDidMount() {
    this.handleLoad();
  }
  
  handleLoad = () => {
    this.props.loadNotes();
  };

  render() {
    const { notes, addNote } = this.props;
    return (
      <div>
        <h2 onClick={this.handleLoad}>Notes</h2>
        <section>
          <ItemForm onEdit={addNote}/>
        </section>
        <ul>
          {notes.map(note => <Note key={note.id} {...note}/>)}
        </ul>
      </div>);
  }
}

export default connect(
  // map state to props
  state => ({ notes: state.notes }),
  
  // map dispatch to props
  { addNote, loadNotes }
)(Notes);
