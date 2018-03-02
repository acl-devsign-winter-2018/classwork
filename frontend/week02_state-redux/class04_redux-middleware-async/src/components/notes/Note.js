import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNote, removeNote } from './actions';
import ItemForm from '../common/ItemForm';
import Comments from '../comments/Comments';

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
    const { id, created, text, removeNote } = this.props;
    const { editing } = this.state;

    return (
      <li>
        {editing ? 
          <div>
            <ItemForm id={id} text={text} onEdit={this.handleEdit}/> 
            <button onClick={this.handleToggleEdit}>cancel</button>
          </div>
          :
          <article>
            <p>
              {text}
              &nbsp;<button onClick={() => removeNote(id)}>X</button>
            </p>
            <time>{new Date(created).toLocaleDateString()}</time>
            <button onClick={this.handleToggleEdit}>✎</button>
          </article>
        }
        
        <Comments noteId={id}/>
      </li>
    );
  }
}

export default connect(
  null,
  { updateNote, removeNote }
)(Note);