import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';
import { commentsSelector } from './reducers';
import ItemForm from '../common/ItemForm';
import Comment from './Comment';

class Comments extends Component {

  handleAdd = comment => {
    const { addComment, noteId } = this.props;
    addComment(noteId, comment);
  };

  render() {
    const { comments, noteId } = this.props;
    return (
      <section>
        <ItemForm onEdit={this.handleAdd}/>
        <ul>
          {comments.map(comment => (
            <Comment key={comment.id} noteId={noteId} {...comment}/>
          ))}
        </ul>
      </section>
    ); 
  }
}

export default connect(
  (state, { noteId }) => ({ 
    comments: commentsSelector(state, noteId),
    noteId
  }),
  { addComment }

)(Comments);
