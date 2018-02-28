import { NOTE_ADD, NOTE_UPDATE, NOTE_REMOVE } from './reducers';
import shortid from 'shortid';

export function addNote(note) {
  note.id = shortid();
  note.timestamp = new Date();

  return {
    type: NOTE_ADD,
    payload: note
  };
}

export function updateNote(note) {
  return {
    type: NOTE_UPDATE,
    payload: note
  };
}

export function removeNote(id) {
  return {
    type: NOTE_REMOVE,
    payload: id
  };
}