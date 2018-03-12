import { NOTE_ADD, NOTE_LOAD, NOTE_UPDATE, NOTE_REMOVE } from './reducers';
import notesApi from '../../services/notesApi';


export const doLoadNotes = api => () => {
  return {
    type: NOTE_LOAD,
    payload: api.load()
  };
};

export function loadNotes() {
  return {
    type: NOTE_LOAD,
    payload: notesApi.load()
  };
}

export function loadNotes2() {
  return dispatch => {
    dispatch({ type: 'LOAD_START' });

    return notesApi.load()
      .then(notes => {
        dispatch({
          type: NOTE_LOAD,
          payload: notes
        });

        dispatch({ type: 'LOAD_END' });
      })
      .catch(err => {
        dispatch({
          type: 'ERROR',
          payload: err
        });
      });
  };
}

export function addNote(note) {
  return {
    type: NOTE_ADD,
    payload: notesApi.add(note)
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