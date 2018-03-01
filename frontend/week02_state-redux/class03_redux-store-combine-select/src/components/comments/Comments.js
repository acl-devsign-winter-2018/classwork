import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';
import ItemForm from '../common/ItemForm';

class Comments extends Component {

  render() {
    const { comments, addComment } = this.props;
    return (
      <section>
        <ItemForm onEdit={addComment}/>
        <ul>
          {comments.map(comment => (
            //<Comment key={comment.id} {...comment}/>
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      </section>
    ); 
  }
}

export default connect(
  // mapStateToProps:
  ({ commentsByNote }) => ({ commentsByNote }),
  // mapDispatchToProps:
  { addComment },
  // mergeProps
  // api is: (stateProps, dispatchProps, ownProps) => {}
  ({ commentsByNote }, { addComment }, { noteId }) => {
    return {
      comments: commentsByNote[noteId],
      addComment: comment => addComment(noteId, comment),
      noteId
    };
  }
)(Comments);
