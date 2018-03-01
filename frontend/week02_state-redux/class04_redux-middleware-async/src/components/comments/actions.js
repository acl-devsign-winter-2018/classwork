import { COMMENT_ADD, COMMENT_REMOVE } from './reducers';
import shortid from 'shortid';

export function addComment(noteId, comment) {
  comment.id = shortid();
  comment.noteId = noteId;

  return {
    type: COMMENT_ADD,
    payload: comment
  };
}

export function removeComment(id, noteId) {
  return {
    type: COMMENT_REMOVE,
    payload: { id, noteId }
  };
}