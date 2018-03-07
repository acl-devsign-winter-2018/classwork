import { APPLY_FILTER, NOTE_ADD, NOTE_LOAD, NOTE_UPDATE, NOTE_REMOVE } from './reducers';
import notesApi from '../../services/notesApi';


export const doLoadNotes = api => () => {
  return {
    type: NOTE_LOAD,
    payload: api.load()
  };
};

export function loadNotes(user) {
  return {
    type: NOTE_LOAD,
    payload: notesApi.load(user)
  };
}

export function addNote(user, note) {
  return {
    type: NOTE_ADD,
    payload: notesApi.add(user, note)
  };
}

export function updateNote(note) {
  return {
    type: NOTE_UPDATE,
    payload: notesApi.update(note)
  };
}

export function removeNote(id) {
  return {
    type: NOTE_REMOVE,
    payload: notesApi.remove(id).then(() => id)
  };
}

export function applyFilter(filter) {
  return {
    type: APPLY_FILTER,
    payload: filter
  };
}