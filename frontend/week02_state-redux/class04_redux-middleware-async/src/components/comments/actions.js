import { COMMENT_ADD, COMMENT_REMOVE } from './reducers';
import notesApi from '../../services/notesApi';

export function addComment(noteId, comment) {
  return dispatch => {
    return notesApi.addComment(noteId, comment)
      .then(comment => {
        dispatch({
          type: COMMENT_ADD,
          payload: {
            noteId,
            comment
          }
        });
      });
  };
}

export function removeComment(id, noteId) {

  return dispatch => {
    return notesApi.removeComment(noteId, id)
      .then(() => {
        dispatch({
          type: COMMENT_REMOVE,
          payload: { id, noteId }
        });
      });
  };

}