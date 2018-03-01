import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from './actions';
import Note from './Note';
import ItemForm from '../common/ItemForm';

class Notes extends Component {
  
  componentDidMount() {
    this.props.addNote({ text: 'Example Note One' });
    this.props.addNote({ text: 'Example Note Two' });
  }

  render() {
    const { notes, addNote } = this.props;
    return (
      <div>
        <h2>Notes</h2>
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
  // dumbbell way:
  // ({ notes }) => ({ notes }),
  
  // map dispatch to props
  // this gets modified to work as expected,
  // more on the guts tomorrow
  { addNote }
)(Notes);
