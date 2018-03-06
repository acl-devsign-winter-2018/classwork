import { COMMENT_ADD, COMMENT_REMOVE } from './reducers';
import notesApi from '../../services/notesApi';

export function addComment(noteId, comment) {
  return {
    type: COMMENT_ADD,
    payload: notesApi.addComment(noteId, comment)
      .then(comment => ({ noteId, comment }))
  };
}

export function removeComment(id, noteId) {
  return {
    type: COMMENT_REMOVE,
    payload: notesApi.removeComment(noteId, id)
      .then(() => ({ id, noteId }))
  };
}