import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';
import ItemForm from '../common/ItemForm';
import Comment from './Comment';

class Comments extends Component {

  handleAdd = comment => {
    const { addComment, noteId } = this.props;
    addComment(noteId, comment);
  };

  render() {
    const { comments } = this.props;
    return (
      <section>
        <ItemForm onEdit={this.handleAdd}/>
        <ul>
          {comments.map(comment => (
            <Comment key={comment.id} {...comment}/>
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
      addComment,
      noteId
    };
  }
)(Comments);
